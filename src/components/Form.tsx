import { useState, FormEvent } from "react"
import cx from "classnames"
import searchIcon from "../assets/icon-search.svg"

type FormProps = {
   fetchUser: (user: string) => void
   isInvalidQuery: boolean
   isLightTheme: boolean
}

export const Form = ({
   fetchUser,
   isInvalidQuery,
   isLightTheme,
}: FormProps) => {
   const [inputValue, setInputValue] = useState("")

   const handleInputChange = ({ target }: { target: HTMLInputElement }) => {
      setInputValue(target.value)
   }

   const handleSubmission = (event: FormEvent) => {
      event.preventDefault()
      fetchUser(inputValue)
      setInputValue("")
   }

   return (
      <form onSubmit={handleSubmission} className={cx({ light: isLightTheme })}>
         <div className="search-field-container">
            <img src={searchIcon} className="search-icon" alt="search icon" />
            <input
               type="text"
               value={inputValue}
               onChange={handleInputChange}
               className={cx("input-field", { light: isLightTheme })}
               placeholder="Search GitHub username..."
               autoComplete="off"
               autoFocus
            />
            {isInvalidQuery && <span className="no-results">No results</span>}
         </div>

         <input type="submit" className="search-button" value="Search" />
      </form>
   )
}
