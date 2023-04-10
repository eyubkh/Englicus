import { CrossIcon } from '@components/atoms/CrossIcon'
import { Ad } from '@components/atoms/Ad'
import Link from 'next/link'

export const LessonEnded = () => {
  return (
    <section>
      <div>
        <Link href='/grammar' passHref legacyBehavior>
          <a>
            <CrossIcon />
          </a>
        </Link>
      </div>
      <Ad />
    </section>
  )
}
