type Props = {
  from: string;
  to: string;
  children?: React.ReactNode;
}

function TimePost({from, to, children}: Props) {
  return (
    <div className="w-auto">
      <div className="text-primary dark:text-primary font-bold text-xl mb-2 flex items-center ">
        <div className="w-1 h-5 text-sm bg-primary" />
        <div className="pl-2">{from} - {to}</div>
      </div>
      <div className="dark:border-primary border-primary bg-transparent dark:bg-transparent">
        {children}
      </div>
    </div>
  )
}

export default TimePost