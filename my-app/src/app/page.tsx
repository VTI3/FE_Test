import {mockData} from '@/mock/mockdata'
import CardList from "@/components/card-list";

export default function Home() {
  return (
    <CardList data={mockData} />
  );
}
