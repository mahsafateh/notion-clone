import Image from "next/image"

export const Heroes = () => {
  return(
    <div className={"flex flex-col items-center justify-center max-w-5xl"}>
      <div className={"flex items-center"}>
        <div className={"relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]"}>
          <Image
            src={"/reading-design.svg"}
            className={"object-contain dark:hidden"}
            fill
            alt={"Reading"}/>
          <Image
            src={"/reading-design-dark.svg"}
            className={"object-contain hidden dark:block"}
            fill
            alt={"Reading"}/>
        </div>
        <div className={"relative h-[400px] w-[400px] hidden md:block"}>
          <Image
            src={"/base-design.svg"}
            className={"object-contain dark:hidden"}
            fill
            alt={"Doucuments"}/>
          <Image
            src={"/base-design-dark.svg"}
            className={"object-contain hidden dark:block"}
            fill
            alt={"Doucuments"}/>
        </div>
      </div>
    </div>
  )
}
