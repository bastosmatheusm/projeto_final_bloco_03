import { LinkedinLogo, InstagramLogo, FacebookLogo } from '@phosphor-icons/react'

function Footer() {
  return (
    <footer className="w-full bg-indigo-800 text-white text-center py-6 mt-auto">
      <p className="font-bold text-base">Farmácia Generation | Copyright: 2025</p>
      <p className="text-sm text-indigo-200 mt-1">Acesse nossas Redes Sociais</p>
      <div className="flex justify-center gap-4 mt-3">
        <LinkedinLogo size={24} className="cursor-pointer hover:text-blue-300" />
        <InstagramLogo size={24} className="cursor-pointer hover:text-pink-300" />
        <FacebookLogo size={24} className="cursor-pointer hover:text-blue-400" />
      </div>
    </footer>
  )
}

export default Footer