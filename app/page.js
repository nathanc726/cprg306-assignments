import Link from 'next/link';
import StudentInfo from './StudentInfo';

export default function Home() {
  return (
    <main>
      <div class="text-4xl ml-20 mt-8">
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
      </div>
      <div class="ml-20">
        <StudentInfo />
      </div>
      <div class="block m-8 ml-20" > 
        <div><Link href="/week2">Week 2</Link></div>
        <div><Link href="/week2">Week 3</Link></div>
      </div>

    </main>
  );
}