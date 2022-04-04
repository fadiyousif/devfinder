type ImageProps = {
   src: string
}

export const Image = ({ src }: ImageProps) => (
   <img src={src} className="user-image" alt="avatar" />
)
