import React from 'react'

interface StatItem {
  number: string
  label: string
}

interface StatsProps {
  stats: StatItem[]
  className?: string
}

const Stats: React.FC<StatsProps> = ({ stats, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl lg:text-4xl font-bold text-[#00B294] mb-2">
            {stat.number}
          </div>
          <div className="text-gray-600 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stats