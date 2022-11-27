import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const [currentUrl, setCurrentUrl] = useState('');

  function handleViewImage(url: string): void {
    onOpen();
    setCurrentUrl(url);
  }

  return (
    <>
      <SimpleGrid columns={3} gap="10">
        {cards.map(card => (
          <Card
            key={card.id}
            data={card}
            viewImage={url => handleViewImage(url)}
          />
        ))}
      </SimpleGrid>

      <ModalViewImage isOpen={isOpen} imgUrl={currentUrl} onClose={onClose} />
    </>
  );
}
