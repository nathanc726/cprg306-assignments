import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div class="text-left m-2">
            <h1>Name: Ho Pong Chan (Nathan)</h1>
            <h1>Course section: CPRG 306 B</h1>
            <Link class="hover:underline" href="https://github.com/nathanc726">My Github link</Link>
        </div>
    )
}