const HeaderText = () => {
  return (
    <div className="max-w-full md:max-w-[634px] space-y-3 md:space-y-6 mb-10">
      <p className="top-sub-text text-sm md:text-base text-ui-desc font-medium capitalize">about us</p>

      <p className="main-text text-ui-dark text-2xl md:text-[40px] leading-8 md:leading-[44px] font-bold capitalize">we set out to bring you closer to your dream home</p>

      <p className="bottom-sub-text text-ui-dark text-xs md:text-sm font-light max-w-lg *:has-[span]:text-ui-red *:has-[span]:font-semibold">
        We help you make <span>informed decisions</span> and educate you on everything <span>Real estate</span> related information and content. We Pride ourselves in providing you with access to <span>curated content.</span>
      </p>
    </div>
  )
}

export default HeaderText
