import { Fragment } from "react"
import cx from "classnames"

type UserInfoItemProps = {
   item: string | null
   index: number
   isLightTheme: boolean
}

const classNames = [
   "fas fa-map-marker-alt",
   "fab fa-twitter",
   "fas fa-link",
   "fas fa-building",
]

export const UserInfoItem = ({
   item,
   index,
   isLightTheme,
}: UserInfoItemProps) => {
   const infoFragment = (item: string | null, index: number) => (
      <Fragment>
         <i className={cx(classNames[index], { grey: !item })}></i>
         <span className={cx({ grey: !item })}>{item || "Not Available"}</span>
      </Fragment>
   )

   const setHref = (item: string | null) => {
      // twitter username
      if (index === 1) {
         return item ? `https://twitter.com/${item}` : undefined
      }

      // website
      if (index === 2) {
         if (!item) {
            return undefined
         }
         const startsWithHTTP = item.slice(0, 4) === "http"
         return startsWithHTTP ? item : `http://${item}`
      }

      // company
      if (index === 3) {
         if (!item) {
            return undefined
         }
         const startsWithAtSign = item[0] === "@"
         const companyName = startsWithAtSign ? item.slice(1) : item
         return `https://github.com/${companyName}`
      }
   }

   return (
      <div className={cx("item", { light: isLightTheme })}>
         {index > 0 ? (
            <a
               href={setHref(item)}
               target="_blank"
               rel="noreferrer"
               className={cx({ underline: item })}
            >
               {infoFragment(item, index)}
            </a>
         ) : (
            infoFragment(item, index)
         )}
      </div>
   )
}
