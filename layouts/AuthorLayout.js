import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Typewriter from "typewriter-effect";
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
           style={{
            fontSize: "4em",
            fontWeight: 200,
            height: "0.8em",
            marginLeft: "0px",
          }}>
              <Typewriter 
              onInit={(typewriter) => {
                typewriter
                  .typeString("안녕하세요~")
                  .callFunction(() => {
                    console.log("Start introduction");
                  })
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Hello!")
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </h1>
          <h2
          style={{
            fontSize: "2em",
            fontWeight: 300,
          }}
        >
          my name is ryan koo (구현교){" "}
        </h2>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
        </div>
      </div>
    </>
  )
}
