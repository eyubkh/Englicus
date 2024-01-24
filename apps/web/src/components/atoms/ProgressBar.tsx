type Props = {
	progress: number;
};

export const ProgressBar = ({ progress }: Props) => {
	return (
		<div className="relative bg-[#f0f0f0] h-[15px] rounded-[9px] w-full overflow-hidden">
			<div
				style={{ width: `${progress}%` }}
				className="absolute top-0 h-[15px] rounded-[9px] transition-all bg-[#86fa7d] 
        shadow-[inset_10px_-6px_#12b607,inset_10px_4px_#12b607,inset_-8px_0px_#12b607]"
			/>
		</div>
	);
};
