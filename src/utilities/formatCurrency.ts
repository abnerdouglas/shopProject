const CURRENCY_FORMATTER = new Intl.NumberFormat('pt-br', {currency: "BRL", style: "currency"})

export function formatCurrency(number : number) {
    return CURRENCY_FORMATTER.format(number)
}