import { Dispatch, SetStateAction } from "react"
import cx from "classnames"
import sunIcon from "../assets/icon-sun.svg"
import moonIcon from "../assets/icon-moon.svg"

type HeaderProps = {
   isLightTheme: boolean
   setIsLightTheme: Dispatch<SetStateAction<boolean>>
}

export const Header = ({ isLightTheme, setIsLightTheme }: HeaderProps) => {
   const toggleValues = (value1: string, value2: string) =>
      isLightTheme ? value1 : value2

   return (
      <div className="header">
         <h1 className={cx({ light: isLightTheme })}>devfinder</h1>
         <div className={cx("theme-toggle", { grey: isLightTheme })}>
            <input
               type="checkbox"
               id="checkbox"
               onChange={() => setIsLightTheme(!isLightTheme)}
            />
            <label htmlFor="checkbox">
               <span className={cx("theme", { light: isLightTheme })}>
                  {toggleValues("Dark", "Light")}
               </span>
               <img src={toggleValues(moonIcon, sunIcon)} alt="icon" />
            </label>
         </div>
      </div>
   )
}
