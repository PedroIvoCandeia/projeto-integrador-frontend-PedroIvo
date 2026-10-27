#include <stdio.h>

int main() {
    float conta, dinheiro, total = 0;

    printf("Digite o valor da conta: R$ ");
    scanf("%f", &conta);

    // continua pedindo dinheiro ate pagar a conta
    while (total < conta) {
        printf("Valor colocado na mesa: R$ ");
        scanf("%f", &dinheiro);

        total = total + dinheiro;

        if (total < conta) {
            printf("Ainda falta: R$ %.2f\n\n", conta - total);
        }
    }

    printf("\nTotal arrecadado: R$ %.2f\n", total);
    printf("Troco: R$ %.2f\n", total - conta);

    return 0;
}
