import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  image: string
  className?: string
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  image,
  className = ''
}) => {
  return (
    <Card className={`overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 ${className}`}>
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <h4 className="text-[#00B294] font-medium mb-3">{role}</h4>
        <p className="text-gray-600 leading-relaxed">{bio}</p>
      </CardContent>
    </Card>
  )
}

export default TeamMember