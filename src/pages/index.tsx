import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$green300',
  border: 0,
  padding: '4px 8px',
  borderRadius: 4,

  span: {
    fontWeight: 700,
  },

  '&:hover': {
    filter: 'brightness(0.7)',
  }

})


export default function Home() {
  return (
      <div>
        <Button>
          <span>Teste </span>
          Hello word
        </Button>
      </div>
  )
}
