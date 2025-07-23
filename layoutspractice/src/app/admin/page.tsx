import { redirect } from 'next/navigation'

const Admin = () => {
    redirect('/about');
  return (
    <div>This is the Admin Page</div>
  )
}

export default Admin