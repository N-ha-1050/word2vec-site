import * as React from "react"
import {
  ChakraProvider,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Button,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Table,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

const api_url: string = "http://localhost:8000/api/word_calc/"

//async function Api(value:string) {
//  const result = await fetch(api_url + value + "/?format=json", {
//    method: "GET",
//    mode: 'no-cors'
//  })
//  return result.json()
//}

//export function App() {
//  const [value, setValue] = React.useState("")
//  const [isLoaded, setIsLoaded] = React.useState(false)
//  const [api_result, setApi_result] = React.useState([])
//  const [clicked, setCliked] = React.useState(false)
//  const handleChange = (event: any) => setValue(event.target.value)
//  const handleClick = () => setCliked(true)
  //Api(value)
  //.then(data => {
  //  console.log(data); // `data.json()` の呼び出しで解釈された JSON データ
  //});
//  return (
//    <ChakraProvider theme={theme}>
//      <Heading as='h1'>Word2Vec</Heading>
//        <InputGroup>
//          <Input
//            value={value}
//            onChange={handleChange}
//            placeholder="王様-男性+女性"
//          />
//          <InputRightAddon children="=" />
//        </InputGroup>
//        <Button
//          type="submit"
//          onClick={handleClick}
//        >
//          submit
//        </Button>
//    </ChakraProvider>
//  )
//}

export function App() {
  const [value, setValue] = React.useState("")
  const [items, setItems] = React.useState({key: String})
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [isClicked, setIsClicked] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const handleChange = (event: any) => setValue(event.target.value)
  //const handleClick = () => setIsClicked(true)
  //const handleClickReturn = () => setIsClicked(false)
  async function handleClick() {
    //if (!value) {
    //  return 0
    //}
    setIsClicked(true)
    //fetch(api_url + value + "/", {
    //  method: 'GET',
    //  mode: 'cors'
    //})
    //.then(response => response.json())
    //.then(data => {
    //  setItems(data)
    //  setIsLoaded(true)
    //})
    const data = await fetch(api_url + value + "/", {
      method: 'GET',
      mode: 'cors'
    })
    .then(response => response.json())
    //.catch(() => console.log("Error"))
    setItems(data)
    setIsLoaded(true)
  }
  function handleClickReturn() {
    setIsClicked(false)
    setIsLoaded(false)
    setIsOpen(false)
    setItems({key: String})
  }
  if (isClicked && isLoaded) {
    return (
      <ChakraProvider theme={theme}>
        <Box textAlign="center" marginTop="5%">
          <Text fontSize="2xl">{value} = </Text>
          <Heading margin="20px" as="h1" hidden={!items["result"]["1"]}>Answer: {items["result"]["1"]}</Heading>
          <Heading as="h1" hidden={!items["result"]["Error"]}>Error:{items["result"]["Error"]}</Heading>
          <Heading as="h1" hidden={items["result"]["1"]||items["result"]["Error"]}>Unexpected Ezrror</Heading>
          <Button margin="10px" hidden={isOpen} onClick={() => setIsOpen(true)}>Learn more</Button>
          <Button margin="10px" hidden={!isOpen} onClick={() => setIsOpen(false)}>Hide</Button>
          <Box hidden={!isOpen} itemAlign="center" marginRight="auto" marginLeft="auto">
            <Table marginLeft="auto" marginRight="auto" marginTop="10px">
              {Object.keys(items.result).map(key => (
                <tr>
                  <td>
                    {key}
                  </td>
                  <td>
                    {items.result[key]}
                  </td>
                </tr>
              ))}
            </Table>
            <Text margin="10px">positive: "
              {Object.keys(items.positive).map(key => (
                <span>
                {items.positive[key]},
                </span>
              ))}
            "</Text>
            <Text margin="10px">negative: "
              {Object.keys(items.negative).map(key => (
                <span>
                {items.negative[key]},
                </span>
              ))}
            "</Text>
          </Box>
          <Button margin="10px" colorScheme="red" onClick={handleClickReturn}>Return</Button>
        </Box>
      </ChakraProvider>
      )
  }
  else {
    let isLoading: boolean = false
    let isDisabled: boolean = false
    if (isClicked) {
      isLoading = true
    }
    if (!value) {
      isDisabled = true
    }
    return (
      <ChakraProvider theme={theme}>
        <Heading as="h1" textAlign="center" margin="50px" marginTop="10%">Word2Vec</Heading>
        <Box marginLeft="10%" marginRight="10%" alignItems="center" textAlign="center">
          <Text>
            単語の計算をすることができます。計算式を入力して送信して下さい。<br/>You can calculate words. Please enter the formula and send.
          </Text>
          <InputGroup margin="10px">
            <Input
              value={value}
              onChange={handleChange}
              placeholder="例) 王様-男性+女性"
              isDisabled={isLoading}
            />
            <InputRightAddon children="=" />
          </InputGroup>
          <Button
            isDisabled={isDisabled}
            isLoading={isLoading}
            loadingText="Loading ..."
            colorScheme="teal"
            type="submit"
            onClick={handleClick}
          >
              Submit
          </Button>
        </Box>
        
      </ChakraProvider>
    )
  }
}