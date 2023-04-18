export function changeUnitMoney(amount: number, currency: string = 'VND'): string {
    const formattedAmount = amount.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});
    const result = formattedAmount.replace(/₫/g, currency);
    return result;
}

export default changeUnitMoney