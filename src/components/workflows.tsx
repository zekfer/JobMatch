import Image from 'next/image';
import WorflowImg01 from '@/public/images/workflow-01.png';
import WorflowImg02 from '@/public/images/workflow-02.png';
import WorflowImg03 from '@/public/images/workflow-03.png';
import Spotlight from '@/components/spotlight';

export default function Workflows() {
  return (
    <section>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='border-gray-200 pb-12 md:pb-20'>
          {/* Section header */}
          <div className='mx-auto max-w-3xl pb-12 text-center md:pb-20'>
            <div className='inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50'>
              <span className='inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
                Tailored Job Flows
              </span>
            </div>
            <h2 className='animate-gradient bg-gradient-to-r from-gray-200 via-indigo-300 to-gray-50 bg-[length:200%_auto] bg-clip-text pb-4 font-mono text-3xl font-semibold text-transparent md:text-4xl'>
              Map Your Career Path to Success
            </h2>
            <p className='text-lg text-indigo-200/65'>
              A simple and efficient way to connect with top employers and land
              your dream job. Our platform seamlessly integrates career planning
              tools to help you stay on track and achieve your professional
              goals.
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className='group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3'>
            {/* Card 1 */}
            <a
              className='group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100'
              href='#0'
            >
              <div className='relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50'>
                {/* Arrow */}
                <div
                  className='absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100'
                  aria-hidden='true'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={9}
                    height={8}
                    fill='none'
                  >
                    <path
                      fill='#F4F4F5'
                      d='m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z'
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className='inline-flex'
                  src={WorflowImg01}
                  width={350}
                  height={288}
                  alt='Workflow 01'
                />
                {/* Content */}
                <div className='p-6'>
                  <div className='mb-3'>
                    <span className='btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:bg-gradient-to-b before:from-gray-700/15 before:to-gray-700/50 hover:bg-gray-800/60'>
                      <span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
                        Built-in Career Tools
                      </span>
                    </span>
                  </div>
                  <p className='text-indigo-200/65'>
                    Enchance your job search with AI-powered insights, skill
                    assessments and resume optimzation. Our tools help you
                    present your best self to employers.
                  </p>
                </div>
              </div>
            </a>
            {/* Card 2 */}
            <a
              className='group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100'
              href='#0'
            >
              <div className='relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50'>
                {/* Arrow */}
                <div
                  className='absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100'
                  aria-hidden='true'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={9}
                    height={8}
                    fill='none'
                  >
                    <path
                      fill='#F4F4F5'
                      d='m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z'
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className='inline-flex'
                  src={WorflowImg02}
                  width={350}
                  height={288}
                  alt='Workflow 02'
                />
                {/* Content */}
                <div className='p-6'>
                  <div className='mb-3'>
                    <span className='btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:bg-gradient-to-b before:from-gray-700/15 before:to-gray-700/50 hover:bg-gray-800/60'>
                      <span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
                        Scale Instantly
                      </span>
                    </span>
                  </div>
                  <p className='text-indigo-200/65'>
                    Advance your career by tracking progress, setting
                    milestones, and receiving personalized carrer growth
                    insights tailored to your aspirations
                  </p>
                </div>
              </div>
            </a>
            {/* Card 3 */}
            <a
              className='group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100'
              href='#0'
            >
              <div className='relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50'>
                {/* Arrow */}
                <div
                  className='absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100'
                  aria-hidden='true'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={9}
                    height={8}
                    fill='none'
                  >
                    <path
                      fill='#F4F4F5'
                      d='m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z'
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className='inline-flex'
                  src={WorflowImg03}
                  width={350}
                  height={288}
                  alt='Workflow 03'
                />
                {/* Content */}
                <div className='p-6'>
                  <div className='mb-3'>
                    <span className='btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:bg-gradient-to-b before:from-gray-700/15 before:to-gray-700/50 hover:bg-gray-800/60'>
                      <span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
                        Tailored Job Flows
                      </span>
                    </span>
                  </div>
                  <p className='text-indigo-200/65'>
                    JobMatch customize your job search experience by providing
                    recommendation that align perfectly with your career goals.
                    Our Ai driven system analyzes your skills,experience and
                    interests to deliver the most relevant job opportunities.
                  </p>
                </div>
              </div>
            </a>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
