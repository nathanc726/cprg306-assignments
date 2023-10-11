import Link from 'next/link';
import StudentInfo from './StudentInfo';

export default function Home() {
  return (
    <main>
      <div class="text-4xl ml-16 mt-6">
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
      </div>
      <div class="ml-16">
        <StudentInfo/>
      </div>
      <div class="block m-8 ml-16" > 
        <div><Link href="/week2">Week 2</Link></div>
        <div><Link href="/week3">Week 3</Link></div>
        <div><Link href="/week4">Week 4</Link></div>
        <div><Link href="/week5">Week 5</Link></div>
      </div>
    </main>
  );
}