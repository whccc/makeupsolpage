/* eslint prefer-regex-literals: ["error", {"disallowRedundantWrapping": false}] */
export const ResponsiveCarousel = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]

export const FormateoNumber = (intNumber: number): string => {
  const Number = new Intl.NumberFormat('en-IN').format(intNumber)
  return Number
}

export const RegExpAloneNumber = (intNumber: string): boolean => {
  const blnNumber = new RegExp(/[0-9]/)
  if (blnNumber.test(intNumber)) {
    return true
  }
  return false
}
