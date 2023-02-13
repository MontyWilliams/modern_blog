import React from 'react'

function Footer() {
  const links = [
    {
        id: 1,
        child: (
            <>
               LinkedIn 
            </>
        ),
        href: 'https://www.linkedin.com/in/monty-williams-304943172/',
        style: 'rounded-tr-md'
    },
    {
        id: 2,
        child: (
            <>
               Github 
            </>
        ),
        href: 'https://github.com/MontyWilliams'
    },
    {
        id: 3,
        child: (
            <>
               Mail 
            </>
        ),
        href: 'mailto:MontyWilliams@918dcx.com',
        style: 'rounded-tr-md'
    }
]

return (
<div className="flex justify-center bg-black items-center h-55 px-4 ">
    <ul className="flex flex-row  ">
        {links.map((link) => (
            <li key={link.id} className="p-4 group">
                <a href={link.href} className="flex justify-between items-center w-full text-white group-hover:animate-pulse"
            download={link.download}
            >
            {link.child}
        </a>
            </li>
        ))}
    </ul>
    
</div>
)
}

export default Footer
