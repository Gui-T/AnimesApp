import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [animes, setAnimes] = useState([ 
    {
      id: 1,
      titulo: 'DOOM', 
      genero: 'Ficção', 
      imagem: 'https://images7.memedroid.com/images/UPLOADED996/6061e6c36bdb6.jpeg',
    },
    {
      id: 2,
      titulo: 'Call of Gruty',
      genero: 'Terror', 
      imagem: 'https://i.redd.it/engr2gu5c9h71.png',
    },
    {
      id: 3,
      titulo: 'Fortnite(REMASTERED)', 
      genero: 'Suspense, Drama', 
      imagem: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/7143zwLemHL._RI_.jpg',
    },
    {
      id: 4,
      titulo: 'Minecraft 2',
      genero: 'Violência, Ação',
      imagem: 'https://i.ytimg.com/vi/fbEstxCV6lE/maxresdefault.jpg',
    },
    {
      id: 5,
      titulo: 'Pinóquio 3',
      genero: 'Terror psicológico',
      imagem: 'https://steamuserimages-a.akamaihd.net/ugc/2047482034945762167/2D8DC968C0614449767F08FD48D0F8BA288DAEBF/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
    },
  ]);

  function Card(props){
    function excluirAnime() {
      setAnimes(animes.filter(anime => anime.id !== props.anime.id));
    }
    return(
      <View style={styles.animes}>
        <Image style={styles.imagens} source={{uri: props.anime.imagem}} />
        <Text style={styles.titulo}>{props.anime.titulo}</Text>
        <Text style={styles.texto}>{props.anime.genero}</Text>
        <TouchableOpacity onPress={excluirAnime}>
          <Image style={styles.lixo} source={{uri:'https://cdn-icons-png.flaticon.com/512/2891/2891491.png'}} />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Animes</Text>
      <ScrollView horizontal pagingEnabled>
        {animes.map(anime => <Card key={anime.id} anime={anime} />)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  titulo: {
    textAlign: 'center',
  },
  nome: {
    fontSize: 50,
    backgroundColor: '#91145d',
    width: '100%',
    textAlign: 'center',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity:  0.20,
    shadowRadius: 5.62,
    elevation: 7,
    marginBottom: 10,
  },
  animes: {
    width: 150,
    height: 370,
    paddingBottom: 10,
    backgroundColor: '#91145d',
    justifyContent: 'center', 
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity:  0.20,
    shadowRadius: 5.62,
    elevation: 7,
    margin: 7,
  },
  imagens: {
    maxWidth: 150,
    height: 270,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    resizeMode: 'stretch',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    height: 45,
    marginLeft: 0,
    textAlign: 'center',
  },
  texto: {
    textAlign: 'left',
    height: 40,
    fontSize: 19,
    color: 'blue',
    marginLeft: 5,
    height: 50,
  },
  lixo: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: 5,
    top: -20,
  },
});
