import * as React from "react"
import {
  ChakraProvider,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Button,
  Box,
  Text,
  theme,
  Table,
  Tr,
  Td,
  Flex,
  Link,
  Stack,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { type } from "os"
import { FaTheaterMasks } from "react-icons/fa"

const api_url = process.env.REACT_APP_API_URL

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
  type Result = {
    "1":string,
    "2":string,
    "3":string,
    "4":string,
    "5":string,
    "6":string,
    "7":string,
    "8":string,
    "9":string,
    "10":string,
    "Error":string,
  }
  const [items, setItems] = React.useState({
    "positive": [],
    "negative": [],
    "result": {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
        Error: "",
    }
  })
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [isClicked, setIsClicked] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const [isAbout, setIsAbout] = React.useState(false)
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
    //setItems({key: String})
  }
  if (isClicked && isLoaded) {
    return (
      <ChakraProvider theme={theme}>
      <Box w="90%" display="flex" justifyContent="center" alignItems="center" flexDirection="column" alignContent="center" m="5%">
          <Text fontSize="2xl">{value} = </Text>
          <Heading m="20px" as="h1" hidden={!items["result"]["1"]}>Answer: {items["result"]["1"]}</Heading>
          <Heading m="20px" as="h1" hidden={!items["result"]["Error"]} color="darkred" borderRadius="5px" p="5px" border="solid">Error</Heading>
          <Heading m="20px" as="h1" hidden={Boolean(items["result"]["1"]) || Boolean(items["result"]["Error"])} color="purple" borderRadius="5px" p="5px" border="solid">Unexpected Error</Heading>
          <Button m="10px" hidden={isOpen} onClick={() => setIsOpen(true)}>Learn more</Button>
          <Button m="10px" hidden={!isOpen} onClick={() => setIsOpen(false)}>Hide</Button>
          <Table hidden={!isOpen} marginTop="10px" variant="simple" width="fit-content" minW="25%">
            {(Object.keys(items.result) as (keyof Result)[]).map(key => (
              <Tr>
                <Td color={(key==="1")?"gold":(key==="2")?"silver":(key==="3")?"Brown":""}>
                  {key}
                </Td>
                <Td>
                  {items["result"][key]}
                </Td>
              </Tr>
            ))}
          </Table>
          <Box hidden={!isOpen} marginTop="10px">
            <Text margin="10px">positive: "
              {Object.keys(items.positive).map(key => (
                <span>
                {items.positive[Number(key)]},
                </span>
              ))}
            "</Text>
            <Text margin="10px">negative: "
              {Object.keys(items.negative).map(key => (
                <span>
                {items.negative[Number(key)]},
                </span>
              ))}
            "</Text>
            </Box>
          <Button m="10px" colorScheme="red" onClick={handleClickReturn}>Return</Button>
        </Box>
      </ChakraProvider>
      )
  }
  else if (isAbout) {
    return (
      <ChakraProvider theme={theme}>
        <Flex w="90%" justify="center" align="center" direction="column" m="5%">
          <Heading as="h1">About</Heading>
          <Text>This site is ...</Text>
          <Heading as="h2" mt="50px">How This Site Works</Heading>
          <Text mt="25px">How to →<Link href="https://www.notion.so/word2vec-981b392227f347ecb579a5116ad5f9b7">My Notion</Link></Text>
          <Heading as="h2" mt="50px">Reference Site</Heading>
          <UnorderedList>
          <ListItem><Link href="https://www.youtube.com/watch?v=sK3HqLwag_w">単語を数値化して遊んでみた - YouTube</Link></ListItem>
          <ListItem><Link href="https://qiita.com/Blaster36/items/84b1af5802f150017d84">Pythonプログラミング：ウィキペディアのデータを使ってword2vecをしてみる｛1. データ取得＆前処理編｝ - Qiita</Link></ListItem>
          <ListItem><Link href="https://swdrsker.hatenablog.com/entry/2017/02/23/193137">word2vecで「単語の足し算引き算」をしてみる - 技術メモ</Link></ListItem>
          </UnorderedList>
          <Button
            m="20px"
            onClick={() => setIsAbout(false)}
            colorScheme="red"
          >
            Return
          </Button>
        </Flex>
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
        <Flex w="90%" h="100vh" justify="center" align="center" direction="column" mx="5%">
          <Heading as="h1">Word2Vec</Heading>
          <Text m="25px">
            単語の計算をすることができます。計算式を入力して送信して下さい。<br/>You can calculate words. Please enter the formula and send.
          </Text>
          <InputGroup m="20px" maxW="1000px">
            <Input
              value={value}
              onChange={handleChange}
              placeholder="例) 王様-男性+女性"
              isDisabled={isLoading}
              isRequired
            />
            <InputRightAddon children="=" />
          </InputGroup>
          <Stack direction={["column", "row"]} spacing="20px">
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
          <Button
            onClick={() => setIsAbout(true)}
          >
            About
          </Button>
          </Stack>
        </Flex>
      </ChakraProvider>
    )
  }
}