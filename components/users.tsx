import { revalidateUsers } from '@/lib/actions'
import { Button } from '@/components/ui/button'

async function getUsers() {
  const endpoint = 'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
  const response = await fetch(endpoint, { next: { tags: ['users'] } })
  return response.json()
}

export default async function Users() {
  const users = await getUsers()

  return (
    <section className='container mt-16 '>
      <form
        action={revalidateUsers}
        className='flex items-center justify-between'
      >
        <h3 className='font-serif text-xl'>Users</h3>
        <Button size='sm'>Revalidate users</Button>
      </form>
      <div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {users.map((user: any) => (
          <div key={user.id} className='rounded bg-white p-4 shadow'>
            <h3 className='font-semibold'>{user.name}</h3>
            <p className='text-sm text-gray-500'>{user.email}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
