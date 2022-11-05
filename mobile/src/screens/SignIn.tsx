import { Center, Icon } from "native-base"
import { GoogleLogo } from "phosphor-react-native"
import { Text } from "react-native"
import Logo from "../assets/logo.svg"
import { Button } from "../components/Button"

export function SignIn() {
  return (
    <Center flex={1} bg="gray.900" p={7}>
      <Logo />
      <Button leftIcon={<Icon as={GoogleLogo} />} type="SECONDARY" title="ENTRAR COM GOOGLE" />
      <Text >Não utilizamos nenhuma informação além do seu e-mail para criação de sua conta.</Text>
    </Center>
  )
}
