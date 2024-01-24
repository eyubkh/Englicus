type Props = {
	children: React.ReactNode;
	onClick?: () => void;
	isDisabled?: boolean;
};

export const Button = ({
	children,
	isDisabled = true,
	onClick = () => {},
}: Props) => {
	return (
		<button
			className={`
      d-block 
      h-fit
      bg-[#12b607]
      text-[#ffffff]
      rounded-xl
      font-bold 
      px-4 py-3 
      cursor-pointer 
      w-auto 
      min-w-[200px] 
      hover:brightness-105 
      transition-[margin-top,box-shadow,filter]
      shadow-[0px_3px_0px_#0d8205]
      active:shadow-none
      active:mt-[3px]

      disabled:opacity-50
      disabled:cursor-not-allowed
      `}
			type="button"
			disabled={isDisabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
