import { useState, useEffect } from "react"
import cx from "classnames"
import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { UserProfile } from "./components/UserProfile"
import "./App.css"

export const App = () => {
   const [avatarUrl, setAvatarUrl] = useState("")
   const [displayName, setDisplayName] = useState(null)
   const [username, setUsername] = useState("")
   const [joinedDate, setJoinedDate] = useState("")
   const [bio, setBio] = useState(null)
   const [publicRepos, setPublicRepos] = useState(null)
   const [followers, setFollowers] = useState(null)
   const [following, setFollowing] = useState(null)
   const [location, setLocation] = useState(null)
   const [twitterUsername, setTwitterUsername] = useState(null)
   const [website, setWebsite] = useState("")
   const [company, setCompany] = useState(null)

   const [isLightTheme, setIsLightTheme] = useState(false)
   const [isInvalidQuery, setIsInvalidQuery] = useState(false)

   useEffect(() => {
      fetchUser("octocat")
   }, [])

   const fetchUser = (user: string) => {
      fetch(`https://api.github.com/users/${user}`)
         .then((res) => {
            if (res.ok) {
               return res.json()
            } else {
               console.error(`${res.status} error`)
               setIsInvalidQuery(true)
               setTimeout(() => setIsInvalidQuery(false), 3000)
            }
         })
         .then((data) => {
            if (!data) {
               return false
            }
            setInfo(data)
         })
         .catch((err) => console.error(err))
   }

   const setInfo = (data: any) => {
      const {
         avatar_url,
         login: username,
         name,
         created_at,
         bio,
         public_repos,
         followers,
         following,
         location,
         twitter_username,
         blog: website,
         company,
      } = data

      setAvatarUrl(avatar_url)
      setUsername(username)
      setDisplayName(name)
      setJoinedDate(created_at)
      setBio(bio)
      setPublicRepos(public_repos)
      setFollowers(followers)
      setFollowing(following)
      setLocation(location)
      setTwitterUsername(twitter_username)
      setWebsite(website)
      setCompany(company)
   }

   const formatDate = () => {
      const [month, day, year] = new Date(joinedDate)
         .toDateString()
         .split(" ")
         .slice(1)
      return `Joined ${day} ${month} ${year}`
   }

   return (
      <div className={cx("app", { light: isLightTheme })}>
         <div className="container">
            <Header
               isLightTheme={isLightTheme}
               setIsLightTheme={setIsLightTheme}
            />
            <Form
               fetchUser={fetchUser}
               isInvalidQuery={isInvalidQuery}
               isLightTheme={isLightTheme}
            />
            <UserProfile
               username={username}
               displayName={displayName}
               joinedDate={joinedDate}
               bio={bio}
               publicRepos={publicRepos}
               followers={followers}
               following={following}
               location={location}
               twitterUsername={twitterUsername}
               website={website}
               company={company}
               avatarUrl={avatarUrl}
               formatDate={formatDate}
               isLightTheme={isLightTheme}
            />
         </div>
      </div>
   )
}
