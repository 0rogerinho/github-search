// React Native
import { Linking } from "react-native"
// Styled-Components
import styled from "styled-components/native"
//  Config Colors
import { colors } from "../../../themesConfig";

interface IModalLinkProps {
  link: string;
  repoName: string;
  showModal: () => void;
}

export const ModalLink = ({link, repoName, showModal}:IModalLinkProps) => {
  const handleLinkPress = () => {
    console.log(link);
    
    Linking.openURL(link);
  };

  return (
    <MainView>
      <ViewBox>
      <Text>Access the repository {repoName}?</Text>
      <View>
        <TouchableOpacityYes  onPress={handleLinkPress}>
            <Text>Yes</Text>
        </TouchableOpacityYes> 
        <TouchableOpacityNo onPress={() => showModal()}>
            <Text>No</Text>
        </TouchableOpacityNo> 
      </View>
      </ViewBox>
    </MainView>
  )
}

const MainView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(20, 29, 47, 0.30);
`
const ViewBox = styled.View`
  width: 80%;
  padding: 20px 20px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.backgroundSecondary};
  border-radius: 10px;
  gap: 20px;
`

const Text = styled.Text`
color: white;
font-size: 20px;
font-weight: bold;
`

const View = styled.View`
  width: 80%;
  padding: 10px 0px;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  align-items: center;
`
const TouchableOpacityYes = styled.TouchableOpacity`
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: green;
`

const TouchableOpacityNo = styled.TouchableOpacity`
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: red;
`
