import { CrossIcon } from '@components/atoms/CrossIcon'
import { Ad } from '@components/atoms/Ad'
import Link from 'next/link'

export const LessonSectionEnded = () => {
  return (
    <section>
      <div>
        <Link href='/path' passHref legacyBehavior>
          <a>
            <CrossIcon />
          </a>
        </Link>
      </div>
      <Ad />
    </section>
  )
}
