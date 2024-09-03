import CallToAction from '@/components/CallToAction'
import Navbar from '@/components/Navbar'
import { skills } from '@/data'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden mx-auto sm:px-10 xs:px-3 xx:px-5 max-w-5xl w-full'>
      <Navbar />
      <div className='mt-10 sm:mt-12 mb-12'>
        <h1 className='xs:text-2xl xx:text-[2rem]  xs:leading-9 sm:text-4xl font-bold mb-3'>
          Who is <span className='arkade'>Arkade?</span>
        </h1>
        <p className='xs:text-xs xr:text-sm sm:text-base xr:text-justify mb-2'>
          <span className='arkade'>Arkade</span> is a dedicated blockchain developer with over three years of experience in the field. His journey into blockchain technology began in 2021 when he took an intensive class on deploying tokens. This foundational experience ignited his passion for blockchain, leading him to explore the intricacies of EVM (Ethereum Virtual Machine) chains. Through persistent learning and practice, <span className='arkade'>Arkade</span> quickly mastered the fundamentals and began to delve deeper into the complexities of blockchain technology, developing a keen understanding of how decentralized systems operate and interact.
        </p>
        <p className='xs:text-xs xr:text-sm sm:text-base xr:text-justify'>
          In 2023, <span className='arkade'>Arkade</span> sought to advance his skills and enrolled in Ayaversity, a prestigious institution renowned for its rigorous blockchain curriculum and innovative teaching methods. During his time at Ayaversity, he immersed himself in advanced blockchain development courses and participated in numerous hands-on projects. His dedication and hard work paid off as he graduated as a finalist, gaining a comprehensive understanding of blockchain development and its myriad applications. This period was marked by intense learning and collaboration with peers, allowing <span className='arkade'>Arkade</span> to refine his technical abilities and gain a strong theoretical foundation in decentralized technologies.
        </p>
        <p className='xs:text-xs xr:text-sm sm:text-base xr:text-justify mb-2'>
          Eager to explore beyond EVM chains, <span className='arkade'>Arkade</span> participated in a Solana workshop hosted by Soleer Devs. This opportunity allowed him to expand his expertise into the Solana ecosystem, a high-performance blockchain known for its unique features and capabilities. The workshop provided <span className='arkade'>Arkade</span> with valuable insights into Solana&apos;s architecture, consensus mechanisms, and development tools. He quickly adapted to the new environment, demonstrating his versatility and ability to navigate different blockchain platforms. This experience broadened his perspective on blockchain technology and equipped him with the skills to develop solutions tailored to various blockchain ecosystems
        </p>
        <p className='xs:text-xs xr:text-sm sm:text-base xr:text-justify mb-2'>
          Throughout his career, <span className='arkade'>Arkade</span> has had the opportunity to showcase his skills and creativity by participating in various hackathons. These competitive events provided him with the platform to apply his knowledge, experiment with new ideas, and collaborate with other talented developers. <span className='arkade'>Arkade&apos;s</span> innovative approach and problem-solving abilities have been recognized in the blockchain community. He is proud to have won two significant hackathons: the Encode Scaling Web3 Hackathon and the Ophir In-House Hackathon. These achievements reflect his ability to innovate and solve complex problems in the blockchain space, demonstrating his proficiency in developing scalable and efficient blockchain solutions.
        </p>
        <p className='xs:text-xs xr:text-sm sm:text-base xr:text-justify'>
          In addition to his technical skills, <span className='arkade'>Arkade</span> has a strong background in Solidity, Rust, and JavaScript. His proficiency in these programming languages allows him to develop robust smart contracts, implement secure protocols, and create dynamic decentralized applications (dApps). <span className='arkade'>Arkade&apos;s</span> technical expertise is complemented by his strategic vision for the future of blockchain technology. He is committed to leveraging his skills to develop impactful blockchain solutions that address real-world challenges and contribute to the broader adoption of decentralized technologies.
        </p>
        <p className='xs:text-xs xr:text-sm sm:text-base xr:text-justify mb-2'>
          <span className='arkade'>Arkade&apos;s</span> dedication to the evolution of decentralized technologies drives him to stay at the forefront of industry advancements. He actively engages with the blockchain community, participating in forums, attending conferences, and contributing to open-source projects. His continuous pursuit of knowledge and commitment to excellence ensures that he remains updated with the latest trends and innovations in the blockchain domain. <span className='arkade'>Arkade&apos;s</span> contributions to the field are marked by his unwavering commitment to excellence, his collaborative spirit, and his vision for a decentralized future
        </p>
        <p className='xs:text-xs xr:text-sm sm:text-base xr:text-justify mb-20'>
          Beyond his professional achievements, <span className='arkade'>Arkade</span> is passionate about educating others about blockchain technology. He believes in the transformative potential of blockchain and is dedicated to sharing his knowledge with aspiring developers and enthusiasts. Through mentorship and community involvement, <span className='arkade'>Arkade</span> aims to inspire the next generation of blockchain innovators and contribute to the growth and development of the blockchain ecosystem.
          In summary, <span className='arkade'>Arkade</span> is a highly skilled and passionate blockchain developer with a proven track record of success. His journey from an intensive class on deploying tokens to winning prestigious hackathons and advancing his knowledge at Ayaversity showcases his dedication and expertise. With a strong foundation in Solidity, Rust, and JavaScript, <span className='arkade'>Arkade</span> is well-equipped to develop innovative blockchain solutions that drive the evolution of decentralized technologies. His commitment to excellence, continuous learning, and community involvement position him as a valuable contributor to the blockchain industry and a visionary leader in the field
        </p>
      </div>
      <h1 className='xs:text-2xl xx:text-[2rem] xs:leading-9 sm:text-4xl font-bold mb-7 mt-14'>Skills</h1>
      <h1>Technical Skills</h1>
      <div>
        {skills.map((skill, id) => (
          <div key={id}>
            <p>{skill.paragraph}</p>
          </div>
        ))}
      </div>
      <CallToAction />
    </div>
  )
}

export default page