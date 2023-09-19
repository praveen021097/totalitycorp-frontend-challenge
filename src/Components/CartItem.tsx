import { CloseButton, Flex, Link, Select, SelectProps, useColorModeValue } from '@chakra-ui/react'

import { CartProductMeta } from './CartProductMeta'

type CartItemProps = {
  isGiftWrapping?: boolean
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  onChangeQuantity?: (quantity: number) => void
  onClickGiftWrapping?: () => void
  onClickDelete?: () => void
}

const QuantitySelect = (props: SelectProps) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  )
}

export const CartItem = (props: CartItemProps) => {
  const {
    isGiftWrapping,
    title,
    description,
    image,
    price,
    onChangeQuantity,
    onClickDelete,
  } = props

  return (
    <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
      <CartProductMeta
        name={title}
        image={image}
        isGiftWrapping={isGiftWrapping}
      />

      {/* Desktop */}
      <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
        <QuantitySelect
          value={1}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value)
          }}
        />
     
        <CloseButton aria-label={`Delete ${title} from cart`} onClick={onClickDelete} />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: 'flex', md: 'none' }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={1}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value)
          }}
        />
        {/* <PriceTag price={price} currency={currency} /> */}
      </Flex>
    </Flex>
  )
}


