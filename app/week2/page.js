import Link from 'next/link';
import StudentInfo from '../StudentInfo';

export default function Page() {
    return (
        <main class="flex">
            <div class="flex-1">
                <h1 class= "text-4xl ml-20 mt-8">My Shopping List</h1>
            </div>
            <div class="flex-1 m-8 mt-8 flex justify-end">
                <StudentInfo/>
            </div>    
        </main>
    );
}