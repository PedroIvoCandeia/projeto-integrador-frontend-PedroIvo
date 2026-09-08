#include <stdio.h>
#include <stdlib.h>
#include <windows.h>

int main()
{
    printf("Iniciando o sistema Ferralog... \n\n");
    Sleep(1000);

    printf("[*] Conectando ao banco de dados do inventario... \n");
    Sleep(1500);

    printf("[*] Carregando modulo de leitura do QR Code... \n");
    Sleep(1500);

    printf("[*] Verificando status e validade de garantias... \n");
    Sleep(2000);

    printf("[*] Sincronizando dados... \n\n");
    Sleep(1000);

    printf("[*] Sistema iniciado com sucesso! \n\n");
    Sleep(1000);

    int opcao;

    do {
        system("cls");

        printf("====================================================\n");
        printf("              SISTEMA FERRALOG - INVENTARIO\n");
        printf("====================================================\n\n");

        printf("Selecione uma opcao no menu abaixo:\n");
        printf("[1] Cadastrar nova ferramenta\n");
        printf("[2] Consultar ferramenta por QR Code\n");
        printf("[3] Verificar status de garantia\n");
        printf("[4] Sair do sistema\n");

        printf("====================================================\n\n");

        printf("Digite a opcao desejada: ");
        scanf("%d", &opcao);

        switch (opcao) {

            case 1: {
                system("cls");

                char nome_ferramenta[50];
                int codigo_qr;
                float valor_compra;

                printf("\n--- SISTEMA FERRALOG ---\n");

                printf("Nome da ferramenta: ");
                scanf(" %49[^\n]", nome_ferramenta);

                printf("Codigo QR: ");
                scanf("%d", &codigo_qr);

                printf("Valor da compra: R$ ");
                scanf("%f", &valor_compra);

                system("cls");

                if (valor_compra > 0) {
                    printf("\n--- RECIBO FERRALOG ---\n");
                    printf("Ferramenta: %s\n", nome_ferramenta);
                    printf("QR Code: %d\n", codigo_qr);
                    printf("Valor: R$ %.2f\n", valor_compra);
                    Sleep(2000);
                }
                else {
                    printf("ERRO: O valor da compra deve ser maior que zero!\n");
                }

                break;
            }

            case 2:
                system("cls");
                printf("Area ainda em desenvolvimento...\n");
                Sleep(2000);
                break;

            case 3:
                system("cls");
                printf("Area ainda em desenvolvimento...\n");
                Sleep(2000);
                break;

            case 4:
                system("cls");
                printf("Ate mais!\n\n");
                Sleep(2000);
                printf("Desligando sistema Ferralog...\n");
                Sleep(1500);
                break;

            default:
                printf("Opcao invalida!\n");
                Sleep(1500);
                break;
        }

    } while (opcao != 4);

    return 0;
}
