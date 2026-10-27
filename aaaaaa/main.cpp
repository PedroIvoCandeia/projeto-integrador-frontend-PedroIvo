#include <iostream>

#include <iostream>
#include <cstdio>

using namespace std;

int main()
{
    float precos[4];
    float total = 0;
    float media = 0;

    for (int i = 0; i < 4; i++) {
        printf("Digite o preco da peca %d: R$ ", i + 1);
        scanf("%f", &precos[i]);
        total += precos[i];
    }
    printf("\n");
    printf("\n--- CUPOM FISCAL ---\n");

    for (int i = 0; i < 4; i++) {
        printf("A peca %d tem o preco de: R$ %.2f\n", i + 1, precos[i]);
    }
    printf("A soma dos precos e: R$ %.2f\n", total);
    media = total / 4;
    printf("Media: R$ %.2f\n", media);

    return 0;
}
