import { Button } from '@/components/ui/button'
import { revalidateAll } from '@/lib/actions'

export default async function Home() {
  return (
    <section>
      <div className='container'>
        <div>
          <h1 className='text-3xl font-bold'>On-demand Revalidation</h1>
          <h2 className='flex gap-2 font-light text-gray-700'>
            <pre>
              <code>revalidatePath</code>
            </pre>{' '}
            vs{' '}
            <pre>
              <code>revalidateTag</code>
            </pre>
          </h2>

          <form action={revalidateAll}>
            <Button size='sm' className='mt-3'>
              Revalidate the entire path
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
