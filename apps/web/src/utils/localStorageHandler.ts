export function getLocalUserId() {
	return localStorage.getItem("user-id");
}

export function setLocalUserId(userId: string) {
	localStorage.setItem("user-id", userId);
}
