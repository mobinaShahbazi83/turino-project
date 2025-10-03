import ProfleMenu from '@/layout/ProfleMenu'

function ProfileLayout({children}) {
  return (
    <div className="lg:bg-[#F3F3F3]  h-auto py-20">
      <div className="flex gap-20">
      <div>
      <ProfleMenu/>
      </div>
      <div>
        {children}
      </div>
    </div>
    </div>
    
  )
}

export default ProfileLayout