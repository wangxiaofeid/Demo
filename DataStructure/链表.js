function addTwoNumbers(l1, l2, jw = 0) {
    if (!l1 && !l2) {
        return null;
    }
    const num = (l1?.value || 0) + (l2?.value || 0) + jw;
    return {
        value: num % 10,
        next: addTwoNumbers(l1.next, l2.next, num >= 10 ? 1 : 0),
    };
}

addTwoNumbers(
    { value: 2, next: { value: 4, next: { value: 3 } } },
    { value: 5, next: { value: 6, next: { value: 4 } } }
);
