import logoImg from '../../assets/logo-nlw-esports.png';
import { View , Image, FlatList} from 'react-native';

import { GAMES } from '../../utils/games';
import { styles } from './styles';
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';

export function Home() {
  return (
    <View style={styles.container}>
        <Image source={logoImg} style={styles.logo}/>
        <Heading title="Encontre Seu Duo!" subtitle="Seleciona Um Game Que Deseja Jogar..."/>
        <FlatList data={GAMES} keyExtractor={item => item.id} renderItem={({ item }) => (
          <GameCard data={item}/>
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
        />
        
    </View>
  );
}