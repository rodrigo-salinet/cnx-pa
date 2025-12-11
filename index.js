const div_titulo = document.getElementById('div_titulo');

const txt_nome_operador = document.getElementById('txt_nome_operador');

const txt_leitura_atual = document.getElementById('txt_leitura_atual');
const txt_leitura_anterior = document.getElementById('txt_leitura_anterior');

const btn_copiar_fator = document.getElementById('btn_copiar_fator');
const btn_colar_fator = document.getElementById('btn_colar_fator');
const txt_fator = document.getElementById('txt_fator');

const btn_copiar_preco_unitario = document.getElementById('btn_copiar_preco_unitario');
const btn_colar_preco_unitario = document.getElementById('btn_colar_preco_unitario');
const txt_preco_unitario = document.getElementById('txt_preco_unitario');

const txt_m3 = document.getElementById('txt_m3');
const txt_consumo = document.getElementById('txt_consumo');
const txt_valor_devido = document.getElementById('txt_valor_devido');

const btn_preencher_media = document.getElementById('btn_preencher_media');
const div_media = document.getElementById('div_media');

const sel_tabulacao = document.getElementById('sel_tabulacao');
const cbx_troca_titularidade = document.getElementById('cbx_troca_titularidade');
const div_troca_titularidade = document.getElementById('div_troca_titularidade');

const txt_nome_novo_morador = document.getElementById('txt_nome_novo_morador');

const cbx_desvinculacao_unidade = document.getElementById('cbx_desvinculacao_unidade');
const cbx_tem_sinistro = document.getElementById('cbx_tem_sinistro');
const div_sinistro = document.getElementById('div_sinistro');
const cbx_tem_vitima = document.getElementById('cbx_tem_vitima');

const btn_copiar_numero_boletim_ocorrencia = document.getElementById('btn_copiar_numero_boletim_ocorrencia');
const btn_colar_numero_boletim_ocorrencia = document.getElementById('btn_colar_numero_boletim_ocorrencia');
const txt_numero_boletim_ocorrencia = document.getElementById('txt_numero_boletim_ocorrencia');
const btn_limpar_numero_boletim_ocorrencia = document.getElementById('btn_limpar_numero_boletim_ocorrencia');

const cbx_risco_morte = document.getElementById('cbx_risco_morte');
const cbx_script_seguranca = document.getElementById('cbx_script_seguranca');
const div_script_seguranca = document.getElementById('div_script_seguranca');
const cbx_teste_fuga = document.getElementById('cbx_teste_fuga');
const cbx_falta_documento = document.getElementById('cbx_falta_documento');

const btn_copiar_documentos_faltantes = document.getElementById('btn_copiar_documentos_faltantes');
const btn_colar_documentos_faltantes = document.getElementById('btn_colar_documentos_faltantes');
const txt_documentos_faltantes = document.getElementById('txt_documentos_faltantes');
const btn_limpar_documentos_faltantes = document.getElementById('btn_limpar_documentos_faltantes');

const cbx_inadimplente = document.getElementById('cbx_inadimplente');
const div_inadimplencia = document.getElementById('div_inadimplencia');

const btn_copiar_dias_atraso = document.getElementById('btn_copiar_dias_atraso');
const btn_colar_dias_atraso = document.getElementById('btn_colar_dias_atraso');
const txt_dias_atraso = document.getElementById('txt_dias_atraso');
const btn_limpar_dias_atraso = document.getElementById('btn_limpar_dias_atraso');

const btn_copiar_valor_devido_atrasado = document.getElementById('btn_copiar_valor_devido_atrasado');
const btn_colar_valor_devido_atrasado = document.getElementById('btn_colar_valor_devido_atrasado');
const btn_limpar_valor_devido_atrasado = document.getElementById('btn_limpar_valor_devido_atrasado');
const cbx_medidor_bloqueado = document.getElementById('cbx_medidor_bloqueado');

const cbx_cobranca_taxas_multa = document.getElementById('cbx_cobranca_taxas_multa');
const div_valor_taxa_multa = document.getElementById('div_valor_taxa_multa');

const btn_copiar_valor_taxa_multa = document.getElementById('btn_copiar_valor_taxa_multa');
const btn_colar_valor_taxa_multa = document.getElementById('btn_colar_valor_taxa_multa');
const txt_valor_taxa_multa = document.getElementById('txt_valor_taxa_multa');
const btn_limpar_valor_taxa_multa = document.getElementById('btn_limpar_valor_taxa_multa');

const cbx_leitura = document.getElementById('cbx_leitura');
const cbx_releitura = document.getElementById('cbx_releitura');
const cbx_desbloqueio_irregular = document.getElementById('cbx_desbloqueio_irregular');

const txt_nome_cliente = document.getElementById('txt_nome_cliente');
const txt_cod_sap_cliente = document.getElementById('txt_cod_sap_cliente');
const txt_num_caso = document.getElementById('txt_num_caso');
const txt_data_demonstrativo_reclamado = document.getElementById('txt_data_demonstrativo_reclamado');
const txt_intervalo_leitura_dias = document.getElementById('txt_intervalo_leitura_dias');
const txt_media_consumo_diario = document.getElementById('txt_media_consumo_diario');

const cbx_fogao = document.getElementById('cbx_fogao');
const cbx_chuveiro = document.getElementById('cbx_chuveiro');
const cbx_outros = document.getElementById('cbx_outros');
const div_tipo_outros = document.getElementById('div_tipo_outros');
const txt_tipo_outros = document.getElementById('txt_tipo_outros');

const txt_ano_medidor = document.getElementById('txt_ano_medidor');
const txt_valor_demonstrativo_reclamado = document.getElementById('txt_valor_demonstrativo_reclamado');

const rdg_leitura_normal = document.getElementById('rdg_leitura_normal');
const rdg_leitura_anterior_media = document.getElementById('rdg_leitura_anterior_media');

const rdg_leitura_anterior_normal = document.getElementById('rdg_leitura_anterior_normal');
const rdg_leitura_media = document.getElementById('rdg_leitura_media');

const txt_leitura_anterior_evidencia = document.getElementById('txt_leitura_anterior_evidencia');

const cbx_evidencia_leitura_disponivel = document.getElementById('cbx_evidencia_leitura_disponivel');
const div_evidencia_leitura_disponivel = document.getElementById('div_evidencia_leitura_disponivel');
const cbx_evidencia_leitura_correta = document.getElementById('cbx_evidencia_leitura_correta');

const txt_leitura_demonstrativo = document.getElementById('txt_leitura_demonstrativo');
const txt_leitura_evidencia = document.getElementById('txt_leitura_evidencia');

const txt_media_seis_meses = document.getElementById('txt_media_seis_meses');
const txt_consumo_demonstrativo_reclamado = document.getElementById('txt_consumo_demonstrativo_reclamado');

const rdg_tipo_cliente = document.getElementsByName('rdg_tipo_cliente');
const rdg_tipo_cliente_residencial = document.getElementById('rdg_tipo_cliente_residencial');
const rdg_tipo_cliente_comercial = document.getElementById('rdg_tipo_cliente_comercial');
const rdg_tipo_cliente_shopping = document.getElementById('rdg_tipo_cliente_shopping');

const txt_bloco_apartamento = document.getElementById('txt_bloco_apartamento');

const rdg_entrada_atendimento = document.getElementsByName('rdg_entrada_atendimento');
const rdg_entrada_atendimento_voz = document.getElementById('rdg_entrada_atendimento_voz');
const rdg_entrada_atendimento_email = document.getElementById('rdg_entrada_atendimento_email');
const rdg_entrada_atendimento_portal = document.getElementById('rdg_entrada_atendimento_portal');
const rdg_entrada_atendimento_whatsapp = document.getElementById('rdg_entrada_atendimento_whatsapp');

const cbx_leitura_alem_limite = document.getElementById('cbx_leitura_alem_limite');

const txt_codigo_medidor = document.getElementById('txt_codigo_medidor');
const txt_analise_detalhada = document.getElementById('txt_analise_detalhada');

const txt_valor1 = document.getElementById('txt_valor1');
const txt_valor2 = document.getElementById('txt_valor2');
const txt_valor3 = document.getElementById('txt_valor3');
const txt_valor4 = document.getElementById('txt_valor4');
const txt_valor5 = document.getElementById('txt_valor5');
const txt_valor6 = document.getElementById('txt_valor6');
const txt_media = document.getElementById('txt_media');

const btn_colar_media_completa = document.getElementById('btn_colar_media_completa');
const btn_calcular_media_completa = document.getElementById('btn_calcular_media_completa');
const btn_copiar_media_completa = document.getElementById('btn_copiar_media_completa');

const txt_mes_ref_media = document.getElementById('txt_mes_ref_media');
const txt_fator_media = document.getElementById('txt_fator_media');
const txt_m3_media = document.getElementById('txt_m3_media');
const txt_consumo_media = document.getElementById('txt_consumo_media');
const txt_custo_media = document.getElementById('txt_custo_media');
const txt_intervalo_media = document.getElementById('txt_intervalo_media');
const txt_valor_media = document.getElementById('txt_valor_media');

const txt_valor_total_divida = document.getElementById('txt_valor_total_divida');
const txt_quantidade_parcelas = document.getElementById('txt_quantidade_parcelas');
const txt_valor_parcela = document.getElementById('txt_valor_parcela');

const btn_calcular_media = document.getElementById('btn_calcular_media');
const div_parcelamento = document.getElementById('div_parcelamento');

const btn_parcelamento = document.getElementById('btn_parcelamento');

const btn_copiar_nome_operador = document.getElementById('btn_copiar_nome_operador');
const btn_colar_nome_operador = document.getElementById('btn_colar_nome_operador');
const btn_limpar_nome_operador = document.getElementById('btn_limpar_nome_operador');

const btn_copiar_leitura_atual = document.getElementById('btn_copiar_leitura_atual');
const btn_limpar_leitura_atual = document.getElementById('btn_limpar_leitura_atual');
const btn_colar_leitura_atual = document.getElementById('btn_colar_leitura_atual');

const btn_copiar_leitura_anterior = document.getElementById('btn_copiar_leitura_anterior');
const btn_limpar_leitura_anterior = document.getElementById('btn_limpar_leitura_anterior');
const btn_colar_leitura_anterior = document.getElementById('btn_colar_leitura_anterior');

const btn_copiar_nome_novo_morador = document.getElementById('btn_copiar_nome_novo_morador');
const btn_colar_nome_novo_morador = document.getElementById('btn_colar_nome_novo_morador');
const btn_limpar_nome_novo_morador = document.getElementById('btn_limpar_nome_novo_morador');

const btn_copiar_nome_cliente = document.getElementById('btn_copiar_nome_cliente');
const btn_colar_nome_cliente = document.getElementById('btn_colar_nome_cliente');
const btn_limpar_nome_cliente = document.getElementById('btn_limpar_nome_cliente');

const btn_copiar_cod_sap_cliente = document.getElementById('btn_copiar_cod_sap_cliente');
const btn_colar_cod_sap_cliente = document.getElementById('btn_colar_cod_sap_cliente');
const btn_limpar_cod_sap_cliente = document.getElementById('btn_limpar_cod_sap_cliente');

const btn_copiar_num_caso = document.getElementById('btn_copiar_num_caso');
const btn_colar_num_caso = document.getElementById('btn_colar_num_caso');
const btn_limpar_num_caso = document.getElementById('btn_limpar_num_caso');

const btn_copiar_data_demonstrativo_reclamado = document.getElementById('btn_copiar_data_demonstrativo_reclamado');
const btn_colar_data_demonstrativo_reclamado = document.getElementById('btn_colar_data_demonstrativo_reclamado');
const btn_limpar_data_demonstrativo_reclamado = document.getElementById('btn_limpar_data_demonstrativo_reclamado');

const btn_copiar_intervalo_leitura_dias = document.getElementById('btn_copiar_intervalo_leitura_dias');
const btn_colar_intervalo_leitura_dias = document.getElementById('btn_colar_intervalo_leitura_dias');
const btn_limpar_intervalo_leitura_dias = document.getElementById('btn_limpar_intervalo_leitura_dias');

const btn_copiar_tipo_outros = document.getElementById('btn_copiar_tipo_outros');
const btn_colar_tipo_outros = document.getElementById('btn_colar_tipo_outros');
const btn_limpar_tipo_outros = document.getElementById('btn_limpar_tipo_outros');

const btn_copiar_ano_medidor = document.getElementById('btn_copiar_ano_medidor');
const btn_colar_ano_medidor = document.getElementById('btn_colar_ano_medidor');
const btn_limpar_ano_medidor = document.getElementById('btn_limpar_ano_medidor');

const btn_copiar_valor_demonstrativo_reclamado = document.getElementById('btn_copiar_valor_demonstrativo_reclamado');
const btn_colar_valor_demonstrativo_reclamado = document.getElementById('btn_colar_valor_demonstrativo_reclamado');
const btn_limpar_valor_demonstrativo_reclamado = document.getElementById('btn_limpar_valor_demonstrativo_reclamado');

const btn_copiar_leitura_anterior_evidencia = document.getElementById('btn_copiar_leitura_anterior_evidencia');
const btn_colar_leitura_anterior_evidencia = document.getElementById('btn_colar_leitura_anterior_evidencia');
const btn_limpar_leitura_anterior_evidencia = document.getElementById('btn_limpar_leitura_anterior_evidencia');

const btn_copiar_leitura_demonstrativo = document.getElementById('btn_copiar_leitura_demonstrativo');
const btn_colar_leitura_demonstrativo = document.getElementById('btn_colar_leitura_demonstrativo');
const btn_limpar_leitura_demonstrativo = document.getElementById('btn_limpar_leitura_demonstrativo');

const btn_copiar_leitura_evidencia = document.getElementById('btn_copiar_leitura_evidencia');
const btn_colar_leitura_evidencia = document.getElementById('btn_colar_leitura_evidencia');
const btn_limpar_leitura_evidencia = document.getElementById('btn_limpar_leitura_evidencia');

const btn_copiar_media_seis_meses = document.getElementById('btn_copiar_media_seis_meses');
const btn_colar_media_seis_meses = document.getElementById('btn_colar_media_seis_meses');
const btn_limpar_media_seis_meses = document.getElementById('btn_limpar_media_seis_meses');

const btn_copiar_consumo_demonstrativo_reclamado = document.getElementById('btn_copiar_consumo_demonstrativo_reclamado');
const btn_colar_consumo_demonstrativo_reclamado = document.getElementById('btn_colar_consumo_demonstrativo_reclamado');
const btn_limpar_consumo_demonstrativo_reclamado = document.getElementById('btn_limpar_consumo_demonstrativo_reclamado');

const btn_copiar_bloco_apartamento = document.getElementById('btn_copiar_bloco_apartamento');
const btn_colar_bloco_apartamento = document.getElementById('btn_colar_bloco_apartamento');
const btn_limpar_bloco_apartamento = document.getElementById('btn_limpar_bloco_apartamento');

const btn_copiar_codigo_medidor = document.getElementById('btn_copiar_codigo_medidor');
const btn_colar_codigo_medidor = document.getElementById('btn_colar_codigo_medidor');
const btn_limpar_codigo_medidor = document.getElementById('btn_limpar_codigo_medidor');

const btn_copiar_analise_detalhada = document.getElementById('btn_copiar_analise_detalhada');
const btn_colar_analise_detalhada = document.getElementById('btn_colar_analise_detalhada');
const btn_limpar_analise_detalhada = document.getElementById('btn_limpar_analise_detalhada');

const btn_recarregar_pagina = document.getElementById('btn_recarregar_pagina');
const btn_gerar_script = document.getElementById('btn_gerar_script');
const btn_gerar_email = document.getElementById('btn_gerar_email');
const btn_gerar_sms = document.getElementById('btn_gerar_sms');
const btn_gerar_whatsapp = document.getElementById('btn_gerar_whatsapp');

const btn_copiar_valor1 = document.getElementById('btn_copiar_valor1');
const btn_colar_valor1 = document.getElementById('btn_colar_valor1');
const btn_limpar_valor1 = document.getElementById('btn_limpar_valor1');

const btn_copiar_valor2 = document.getElementById('btn_copiar_valor2');
const btn_colar_valor2 = document.getElementById('btn_colar_valor2');
const btn_limpar_valor2 = document.getElementById('btn_limpar_valor2');

const btn_copiar_valor3 = document.getElementById('btn_copiar_valor3');
const btn_colar_valor3 = document.getElementById('btn_colar_valor3');
const btn_limpar_valor3 = document.getElementById('btn_limpar_valor3');

const btn_copiar_valor4 = document.getElementById('btn_copiar_valor4');
const btn_colar_valor4 = document.getElementById('btn_colar_valor4');
const btn_limpar_valor4 = document.getElementById('btn_limpar_valor4');

const btn_copiar_valor5 = document.getElementById('btn_copiar_valor5');
const btn_colar_valor5 = document.getElementById('btn_colar_valor5');
const btn_limpar_valor5 = document.getElementById('btn_limpar_valor5');

const btn_copiar_valor6 = document.getElementById('btn_copiar_valor6');
const btn_colar_valor6 = document.getElementById('btn_colar_valor6');
const btn_limpar_valor6 = document.getElementById('btn_limpar_valor6');

const btn_copiar_valor_total_divida = document.getElementById('btn_copiar_valor_total_divida');
const btn_colar_valor_total_divida = document.getElementById('btn_colar_valor_total_divida');
const btn_limpar_valor_total_divida = document.getElementById('btn_limpar_valor_total_divida');

const btn_copiar_quantidade_parcelas = document.getElementById('btn_copiar_quantidade_parcelas');
const btn_colar_quantidade_parcelas = document.getElementById('btn_colar_quantidade_parcelas');
const btn_limpar_quantidade_parcelas = document.getElementById('btn_limpar_quantidade_parcelas');

const div_linha_nome_operador = document.getElementById("div_linha_nome_operador");
const div_linha_leitura_atual_anterior = document.getElementById("div_linha_leitura_atual_anterior");
const div_linha_fator_preco = document.getElementById("div_linha_fator_preco");
const div_linha_m3_consumo_valor = document.getElementById("div_linha_m3_consumo_valor");
const div_linha_tabulacao = document.getElementById("div_linha_tabulacao");
const div_linha_troca_titularidade = document.getElementById("div_linha_troca_titularidade");
const div_linha_falta_documento = document.getElementById("div_linha_falta_documento");
const div_linha_tem_sinistro = document.getElementById("div_linha_tem_sinistro");
const div_linha_risco_morte = document.getElementById("div_linha_risco_morte");
const div_linha_script_seguranca = document.getElementById("div_linha_script_seguranca");
const div_linha_teste_fuga = document.getElementById("div_linha_teste_fuga");
const div_linha_inadimplente = document.getElementById("div_linha_inadimplente");
const div_linha_medidor_bloqueado = document.getElementById("div_linha_medidor_bloqueado");
const div_linha_cobranca_taxas_multa = document.getElementById("div_linha_cobranca_taxas_multa");
const div_linha_nome_cliente = document.getElementById("div_linha_nome_cliente");
const div_linha_cod_sap_cliente = document.getElementById("div_linha_cod_sap_cliente");
const div_linha_num_caso = document.getElementById("div_linha_num_caso");
const div_linha_data_demonstrativo_reclamado = document.getElementById("div_linha_data_demonstrativo_reclamado");
const div_linha_intervalo_leitura_dias = document.getElementById("div_linha_intervalo_leitura_dias");
const div_linha_media_consumo_diario = document.getElementById("div_linha_media_consumo_diario");
const div_linha_tipo_utilizacao = document.getElementById("div_linha_tipo_utilizacao");
const div_linha_ano_medidor = document.getElementById("div_linha_ano_medidor");
const div_linha_valor_demonstrativo_reclamado = document.getElementById("div_linha_valor_demonstrativo_reclamado");
const div_linha_leitura = document.getElementById("div_linha_leitura");
const div_linha_leitura_anterior = document.getElementById("div_linha_leitura_anterior");
const div_linha_leitura_anterior_evidencia = document.getElementById("div_linha_leitura_anterior_evidencia");
const div_linha_evidencia_leitura_disponivel = document.getElementById("div_linha_evidencia_leitura_disponivel");
const div_linha_leitura_demonstrativo = document.getElementById("div_linha_leitura_demonstrativo");
const div_linha_leitura_evidencia = document.getElementById("div_linha_leitura_evidencia");
const div_linha_media_seis_meses = document.getElementById("div_linha_media_seis_meses");
const div_linha_consumo_demonstrativo_reclamado = document.getElementById("div_linha_consumo_demonstrativo_reclamado");
const div_linha_tipo_cliente = document.getElementById("div_linha_tipo_cliente");
const div_linha_bloco_apartamento = document.getElementById("div_linha_bloco_apartamento");
const div_linha_entrada_atendimento = document.getElementById("div_linha_entrada_atendimento");
const div_linha_leitura_alem_limite = document.getElementById("div_linha_leitura_alem_limite");
const div_linha_codigo_medidor = document.getElementById("div_linha_codigo_medidor");
const div_linha_analise_detalhada = document.getElementById("div_linha_analise_detalhada");

const options_sel_tabulacao = [
    "-> Selecione aqui <-",
    "2ª via de contrato",
    "2ª via de Nota Fiscal",
    "Abastecimento",
    "Alteração cadastral",
    "Alteração de dados e sem débitos",
    "Análise de consumo",
    "Análise de consumo não aceita",
    "Atraso na religação",
    "Bloqueio de medidor",
    "Boleto de abastecimento",
    "Carta de quitação",
    "Cobrança de taxa de leitura",
    "Código de barras",
    "Comprovante de pagamento",
    "Consultas de débito",
    "Conta não emitida",
    "Corte indevido",
    "Débito automático",
    "Demonstrativo ilegível",
    "Desbloqueio de medidor",
    "Desvinculação de dados",
    "Dúvida sobre corte",
    "Dúvidas sobre contrato",
    "Dúvidas sobre notificação",
    "Erro de leitura",
    "Inclusão de novo morador",
    "Medidor invertido",
    "Mostrar Tudo",
    "Negociação",
    "Pagamento em duplicidade",
    "Parcelamento de contas",
    "Primeira leitura",
    "Pedido emergencial (D0, D1)",
    "Problemas com acesso ao portal",
    "Reclamação do preço",
    "Reclamação do prestador de serviço",
    "Releitura",
    "Religação",
    "Rescisão de contrato",
    "Retirada de PFIN",
    "Segunda via de demonstrativo",
    "Status do pedido (Roadnet)",
    "Suporte de acesso ao portal",
    "Troca de medidor",
    "Troca de titularidade",
    "Vazamento"
];

options_sel_tabulacao.sort().forEach((option_temp, index) => {
    let opt = document.createElement('option');
    opt.value = index;
    opt.innerHTML = option_temp;
    sel_tabulacao.appendChild(opt);
});

const todas_linhas = [
    div_linha_leitura_atual_anterior,
    div_linha_m3_consumo_valor,
    div_linha_troca_titularidade,
    div_linha_falta_documento,
    div_linha_tem_sinistro,
    div_linha_risco_morte,
    div_linha_script_seguranca,
    div_linha_teste_fuga,
    div_linha_inadimplente,
    div_linha_medidor_bloqueado,
    div_linha_cobranca_taxas_multa,
    div_linha_nome_cliente,
    div_linha_cod_sap_cliente,
    div_linha_num_caso,
    div_linha_data_demonstrativo_reclamado,
    div_linha_intervalo_leitura_dias,
    div_linha_media_consumo_diario,
    div_linha_tipo_utilizacao,
    div_linha_ano_medidor,
    div_linha_valor_demonstrativo_reclamado,
    div_linha_leitura,
    div_linha_leitura_anterior,
    div_linha_leitura_anterior_evidencia,
    div_linha_evidencia_leitura_disponivel,
    div_linha_leitura_demonstrativo,
    div_linha_leitura_evidencia,
    div_linha_media_seis_meses,
    div_linha_consumo_demonstrativo_reclamado,
    div_linha_tipo_cliente,
    div_linha_bloco_apartamento,
    div_linha_entrada_atendimento,
    div_linha_leitura_alem_limite,
    div_linha_codigo_medidor,
    div_linha_analise_detalhada
];

function esconderLinhas(matriz) {
    matriz.forEach(function (div_temp) {
        div_temp.style.display = "none";
    });
}

esconderLinhas(todas_linhas);

function mostrarLinhas(divs) {
    divs.forEach(function (div_temp) {
        div_temp.style.display = "block";
    });
}

[
    btn_limpar_nome_operador,
    btn_limpar_leitura_atual, 
    btn_limpar_leitura_anterior,
    btn_limpar_nome_novo_morador,
    btn_limpar_numero_boletim_ocorrencia,
    btn_limpar_documentos_faltantes,
    btn_limpar_dias_atraso,
    btn_limpar_valor_devido_atrasado,
    btn_limpar_valor_taxa_multa,
    btn_limpar_nome_cliente,
    btn_limpar_cod_sap_cliente, 
    btn_limpar_num_caso,
    btn_limpar_data_demonstrativo_reclamado,
    btn_limpar_intervalo_leitura_dias,
    btn_limpar_tipo_outros,
    btn_limpar_ano_medidor,
    btn_limpar_valor_demonstrativo_reclamado,
    btn_limpar_leitura_anterior_evidencia,
    btn_limpar_leitura_demonstrativo,
    btn_limpar_leitura_evidencia,
    btn_limpar_media_seis_meses,
    btn_limpar_consumo_demonstrativo_reclamado,
    btn_limpar_bloco_apartamento,
    btn_limpar_codigo_medidor,
    btn_limpar_analise_detalhada,
    btn_limpar_valor1,
    btn_limpar_valor2,
    btn_limpar_valor3,
    btn_limpar_valor4,
    btn_limpar_valor5,
    btn_limpar_valor6,
    btn_limpar_valor_total_divida,
    btn_limpar_quantidade_parcelas
].forEach(function (el) {
    el.addEventListener('click', () => {
        let idElemento = el.id.replace('btn_limpar_', 'txt_');
        let elementoTemp = document.getElementById(idElemento);
        elementoTemp.value = '';
        elementoTemp.focus();
    });
});

[
    btn_copiar_nome_operador,
    btn_copiar_leitura_atual,
    btn_copiar_leitura_anterior,
    btn_copiar_fator,
    btn_copiar_preco_unitario,
    btn_copiar_nome_novo_morador,
    btn_copiar_documentos_faltantes,
    btn_copiar_numero_boletim_ocorrencia,
    btn_copiar_dias_atraso,
    btn_copiar_valor_devido_atrasado,
    btn_copiar_valor_taxa_multa,
    btn_copiar_nome_cliente,
    btn_copiar_cod_sap_cliente,
    btn_copiar_num_caso,
    btn_copiar_data_demonstrativo_reclamado,
    btn_copiar_intervalo_leitura_dias,
    btn_copiar_tipo_outros,
    btn_copiar_ano_medidor,
    btn_copiar_valor_demonstrativo_reclamado,
    btn_copiar_leitura_anterior_evidencia,
    btn_copiar_leitura_demonstrativo,
    btn_copiar_leitura_evidencia,
    btn_copiar_media_seis_meses,
    btn_copiar_consumo_demonstrativo_reclamado,
    btn_copiar_bloco_apartamento,
    btn_copiar_codigo_medidor,
    btn_copiar_analise_detalhada,
    btn_copiar_valor1,
    btn_copiar_valor2,
    btn_copiar_valor3,
    btn_copiar_valor4,
    btn_copiar_valor5,
    btn_copiar_valor6,
    btn_copiar_valor_total_divida,
    btn_colar_quantidade_parcelas
].forEach(function (el) {
    el.addEventListener('click', () => {
        let idElemento = el.id.replace('btn_copiar_', 'txt_');
        let elementoTemp = document.getElementById(idElemento);
        copyText(elementoTemp.value);
        elementoTemp.focus();
    });
});

[
    btn_colar_nome_operador,
    btn_colar_leitura_atual,
    btn_colar_leitura_anterior,
    btn_colar_fator,
    btn_colar_preco_unitario,
    btn_colar_nome_novo_morador,
    btn_colar_numero_boletim_ocorrencia,
    btn_colar_documentos_faltantes,
    btn_colar_dias_atraso,
    btn_colar_valor_devido_atrasado,
    btn_colar_valor_taxa_multa,
    btn_colar_nome_cliente,
    btn_colar_cod_sap_cliente,
    btn_colar_num_caso,
    btn_colar_data_demonstrativo_reclamado,
    btn_colar_intervalo_leitura_dias,
    btn_colar_tipo_outros,
    btn_colar_ano_medidor,
    btn_colar_valor_demonstrativo_reclamado,
    btn_colar_leitura_anterior_evidencia,
    btn_colar_leitura_demonstrativo,
    btn_colar_leitura_evidencia,
    btn_colar_media_seis_meses,
    btn_colar_consumo_demonstrativo_reclamado,
    btn_colar_bloco_apartamento,
    btn_colar_codigo_medidor,
    btn_colar_analise_detalhada,
    btn_colar_valor1,
    btn_colar_valor2,
    btn_colar_valor3,
    btn_colar_valor4,
    btn_colar_valor5,
    btn_colar_valor6,
    btn_colar_valor_total_divida,
    btn_colar_quantidade_parcelas
].forEach(function (el) {
    el.addEventListener('click', () => {
        let idElemento = el.id.replace('btn_colar_', 'txt_');
        let elementoTemp = document.getElementById(idElemento);
        pasteFromClipboard(elementoTemp);
        elementoTemp.focus();
    });
});

['keyup','change'].forEach(function(e) {
    [txt_leitura_atual, txt_leitura_anterior, txt_fator, txt_preco_unitario].forEach(function (el) {
        el.addEventListener(e, () => {
            txt_m3.value = "";
            txt_consumo.value = "";
            txt_valor_devido.value = "";

            let leitura_atual = parseFloat(txt_leitura_atual.value.trim());
            let leitura_anterior = parseFloat(txt_leitura_anterior.value.trim());
            
            if (leitura_atual > leitura_anterior) {
                calcularM3();
                calcularConsumo();
                calcularValorDevido();
            }
        });
    });
});

['keyup','change'].forEach(function(e) {
    [txt_valor_total_divida, txt_quantidade_parcelas].forEach(function (el) {
        el.addEventListener(e, () => {
            txt_valor_parcela.value = "";
            
            let valor_total_divida = parseFloat(txt_valor_total_divida.value.trim());
            
            let quantidade_parcelas = parseInt(txt_quantidade_parcelas.value.trim());
            
            if (valor_total_divida > 0 && quantidade_parcelas > 0) {
                calcularParcelamento();
            }
        });
    });
});

btn_calcular_media.addEventListener('click', function () {
    calcularMedia();
});

txt_intervalo_leitura_dias.addEventListener('change', () => {
   calcularMediaConsumoDiario();
});

btn_limpar_intervalo_leitura_dias.addEventListener('click', () => {
   calcularMediaConsumoDiario();
});

btn_recarregar_pagina.addEventListener('click', () => {
    window.location.reload();
});

btn_gerar_script.addEventListener('click', () => {
    gerarScript();
});

btn_gerar_whatsapp.addEventListener('click', () => {
    gerarWhatsapp();
});

btn_gerar_email.addEventListener('click', () => {
    gerarEmail();
});    

btn_gerar_sms.addEventListener('click', () => {
    gerarSMS();
});

sel_tabulacao.addEventListener('change', () => {
    mostrarOpcoes(sel_tabulacao[sel_tabulacao.selectedIndex].text);
});

function calcularM3() {
    const leitura_atual = parseFloat(txt_leitura_atual.value.trim());
    const leitura_anterior = parseFloat(txt_leitura_anterior.value.trim());

    if (leitura_atual > 0 && leitura_anterior > 0) {
        txt_m3.value = leitura_atual - leitura_anterior;
    }
}

function calcularConsumo() {
    const m3 = parseFloat(txt_m3.value.trim());
    const fator = parseFloat(txt_fator.value.trim());

    if (m3 > 0 && fator > 0) {
        let resultado_m3_x_fator = m3 * fator;
        let txt = "";
        txt = resultado_m3_x_fator;
        if (resultado_m3_x_fator.toString().indexOf(".") > 0) {
            let consumo = resultado_m3_x_fator.toString().split(".");
            txt = consumo[0] + "." + consumo[1].substring(0,3);
        }
        txt_consumo.value = txt;
    }
}

function calcularValorDevido() {
    const consumo = parseFloat(txt_consumo.value.trim());
    const preco_unitario = parseFloat(txt_preco_unitario.value.trim());

    if (consumo > 0 && preco_unitario > 0) {
        let resultado_consumo_x_preco_unitario = consumo * preco_unitario;

        let txt = "R$";
        if (resultado_consumo_x_preco_unitario.toString().indexOf(".") > 0) {
            let consumo_x_preco_unitario = resultado_consumo_x_preco_unitario.toString().split(".");
            txt += consumo_x_preco_unitario[0] + "," + consumo_x_preco_unitario[1].substring(0,2);
        } else {
            txt += resultado_consumo_x_preco_unitario;
        }

        txt_valor_devido.value = txt;
    }
}

function calcularMedia() {
    const valor1 = parseFloat(txt_valor1.value.trim());
    const valor2 = parseFloat(txt_valor2.value.trim());
    const valor3 = parseFloat(txt_valor3.value.trim());
    const valor4 = parseFloat(txt_valor4.value.trim());
    const valor5 = parseFloat(txt_valor5.value.trim());
    const valor6 = parseFloat(txt_valor6.value.trim());

    let media_anterior = txt_media.value;
    txt_media.value = "";

    let valores = [
        (isNaN(valor1)) ? 0 : valor1, 
        (isNaN(valor2)) ? 0 : valor2,
        (isNaN(valor3)) ? 0 : valor3,
        (isNaN(valor4)) ? 0 : valor4,
        (isNaN(valor5)) ? 0 : valor5,
        (isNaN(valor6)) ? 0 : valor6
    ];

    let i = 0;
    valores.forEach(valor => {
        if (valor > 0) {
            i++;
        }
    });

    let total_valores = valores.reduce((a, b) => a + b, 0);

    let media = total_valores / i;

    if(!isNaN(media)) {
        let media_seis_meses = txt_media_seis_meses.value.trim();
        if (media_seis_meses.length == 0 || media_anterior == media_seis_meses) {
            txt_media_seis_meses.value = media;
        }
        txt_media.value = media;
    }
}

const caracteres_permitidos = ["0","1","2","3","4","5","6","7","8","9","."];
function achouCaracter(caracter_digitado) {
    let achou = false;
    caracteres_permitidos.forEach(caracter_permitido => {
        if (caracter_permitido == caracter_digitado) {
            achou = true;
        }
    });
    return achou;
    /**
     * Utilização:
     * if (!achouNumero(txt_leitura_atual.key)) {
     *     return false;
     * }
     */
}

function getAllFuncs(toCheck) {
    const props = [];
    let obj = toCheck;
    do {
        props.push(...Object.getOwnPropertyNames(obj));
    } while (obj = Object.getPrototypeOf(obj));
    
    return props.sort().filter((e, i, arr) => { 
       if (e!=arr[i+1] && typeof toCheck[e] == 'function') return true;
    });
}

function gerarEmail() {
    const gerador_texto = new TextGenerator();
    let funcoes = getAllFuncs(gerador_texto);

    let texto = gerador_texto.cumprimento() + 
    gerador_texto.apresentacaoOperador() + 
    gerador_texto.caso() + 
    gerador_texto.analiseConsumo() + 
    gerador_texto.trocaTitularidade() + 
    gerador_texto.sinistro() + 
    gerador_texto.riscoMorte() + 
    gerador_texto.scriptSeguranca() + 
    gerador_texto.testeFuga() + 
    gerador_texto.taxasMulta() + 
    gerador_texto.inadimplencia() + 
    gerador_texto.medidorBloqueado() + 
    gerador_texto.dataDemonstrativoReclamado() + 
    gerador_texto.intervaloLeituraDias() + 
    gerador_texto.tipoUtilizacao() + 
    gerador_texto.anoMedidor() + 
    gerador_texto.valorDemonstrativoReclamado() + 
    gerador_texto.condicaoLeitura() + 
    gerador_texto.condicaoLeituraAnterior() + 
    gerador_texto.leituraAnteriorEvidencia() + 
    gerador_texto.evidenciaLeituraDisponivel() + 
    gerador_texto.leituraDemonostrativo() + 
    gerador_texto.leituraEvidencia() + 
    gerador_texto.mediaConsumoUltimosSeisMeses() + 
    gerador_texto.consumoDemonstrativoReclamado() + 
    gerador_texto.tipoCliente() + 
    gerador_texto.blocoApartamento() + 
    gerador_texto.entradaAtendimento() + 
    gerador_texto.leituraAlemLimite() + 
    gerador_texto.codigoMedidor() + 
    gerador_texto.analiseDetalhada() + 
    gerador_texto.observacoes() + 
    gerador_texto.despedida() + 
    gerador_texto.dicas();

    notificarOk(texto);
}

function gerarSMS() {
    const gerador_texto = new TextGenerator(txt_nome_operador.value.trim());

    let texto = gerador_texto.mensagemSMS();

    notificarOk(texto);
}

function gerarScript() {
    const gerador_texto = new TextGenerator();

    let texto = gerador_texto.script();
    notificarOk(texto);
}

function gerarWhatsapp() {
    const gerador_texto = new TextGenerator();

    let texto = gerador_texto.cumprimento() + 
    gerador_texto.apresentacaoOperador() + 
    gerador_texto.caso() + 
    gerador_texto.analiseConsumo() + 
    gerador_texto.trocaTitularidade() + 
    gerador_texto.sinistro() + 
    gerador_texto.riscoMorte() + 
    gerador_texto.scriptSeguranca() + 
    gerador_texto.testeFuga() + 
    gerador_texto.taxasMulta() + 
    gerador_texto.inadimplencia() + 
    gerador_texto.medidorBloqueado() + 
    gerador_texto.dataDemonstrativoReclamado() + 
    gerador_texto.intervaloLeituraDias() + 
    gerador_texto.tipoUtilizacao() + 
    gerador_texto.anoMedidor() + 
    gerador_texto.valorDemonstrativoReclamado() + 
    gerador_texto.condicaoLeitura() + 
    gerador_texto.condicaoLeituraAnterior() + 
    gerador_texto.leituraAnteriorEvidencia() + 
    gerador_texto.evidenciaLeituraDisponivel() + 
    gerador_texto.leituraDemonostrativo() + 
    gerador_texto.leituraEvidencia() + 
    gerador_texto.mediaConsumoUltimosSeisMeses() + 
    gerador_texto.consumoDemonstrativoReclamado() + 
    gerador_texto.tipoCliente() + 
    gerador_texto.blocoApartamento() + 
    gerador_texto.entradaAtendimento() + 
    gerador_texto.leituraAlemLimite() + 
    gerador_texto.codigoMedidor() + 
    gerador_texto.analiseDetalhada() + 
    gerador_texto.despedida();

    notificarOk(texto);
}

function calcularMediaConsumoDiario() {
    let consumo = parseFloat(txt_consumo.value.trim());
    let intervalo_leitura_dias = parseInt(txt_intervalo_leitura_dias.value.trim());
    let media_consumo_diario = consumo / intervalo_leitura_dias;

    txt_media_consumo_diario.value = "";
    if (consumo > 0 && intervalo_leitura_dias > 0) {
        txt_media_consumo_diario.value = media_consumo_diario;
    }
}

async function pasteFromClipboard(input) {
    var text = await navigator.clipboard.readText();
    const tamanho_decimal = parseInt(input.step.length);
    if (input.type == "number") {
        if (text.indexOf(",") > 0) {
            text = text.replace(".","");
            text = text.replace(",",".");
        } else {
            if (tamanho_decimal == 0) {
                if (text.indexOf(".") > 0) {
                    text = text.split(".")[0];
                }
            }
        }
    }
    input.value = text;
}

function calcularParcelamento() {
    let valor_total_divida = parseFloat(txt_valor_total_divida.value.trim());
    let quantidade_parcelas = parseInt(txt_quantidade_parcelas.value.trim());

    txt_valor_parcela.value = valor_total_divida / quantidade_parcelas;
}

function copyText(txt) {
    navigator.clipboard.writeText(txt).then(function() {
        notificarOk('Texto copiado com sucesso!');
    }, function(err) {
        notificarNok('Não foi possível copiar o texto!');
    });
}

function mostrarOpcoes(opt_value) {
    var divs_temp = [];
    esconderLinhas(todas_linhas);
    switch (opt_value) {
        case "-> Selecione aqui <-":
            divs_temp = [];
            break;
        case "2ª via de contrato":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "2ª via de Nota Fiscal":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso,
                div_linha_inadimplente
            ];
            break;
        case "Abastecimento":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Alteração cadastral":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Alteração de dados e sem débitos":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Análise de consumo":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso,
                div_linha_leitura_atual_anterior,
                div_linha_m3_consumo_valor
            ];
            break;
        case "Análise de consumo não aceita":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Atraso na religação":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Bloqueio de medidor":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Boleto de abastecimento":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Carta de quitação":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Cobrança de taxa de leitura":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Código de barras":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Comprovante de pagamento":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Consultas de débito":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Conta não emitida":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Corte indevido":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Débito automático":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Demonstrativo ilegível":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Desbloqueio de medidor":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Desvinculação de dados":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Dúvida sobre corte":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Dúvidas sobre contrato":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Dúvidas sobre notificação":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Erro de leitura":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Inclusão de novo morador":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Medidor invertido":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Negociação":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Pagamento em duplicidade":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Parcelamento de contas":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Primeira leitura":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Pedido emergencial (D0, D1)":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Problemas com acesso ao portal":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Reclamação do preço":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Reclamação do prestador de serviço":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Releitura":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Religação":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Rescisão de contrato":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Retirada de PFIN":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Segunda via de demonstrativo":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Status do pedido (Roadnet)":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Suporte de acesso ao portal":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Troca de medidor":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Troca de titularidade":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        case "Vazamento":
            divs_temp = [
                div_linha_nome_cliente,
                div_linha_cod_sap_cliente,
                div_linha_num_caso
            ];
            break;
        default:
            divs_temp = todas_linhas;
            break;
    }
    mostrarLinhas(divs_temp);
}

class TextGenerator {
    cumprimento() {
        let nome_cliente = txt_nome_cliente.value.trim();
        if (nome_cliente.length == 0) {
            nome_cliente = "PREENCHER NOME DO CLIENTE";
        }
        return "Prezado(a) Sr(a). <span onclick=\"txt_nome_cliente.focus()\">" + nome_cliente + "</span>,\n esperamos que esteja bem.<br>";
    }

    apresentacaoOperador() {
        let tabulacao = sel_tabulacao.value.trim();

        let nome_operador = txt_nome_operador.value.trim();
        if (nome_operador.length == 0) {
            nome_operador = "PREENCHER NOME DO OPERADOR";
        }

        return "Meu nome é <span onclick=\"txt_nome_operador.focus()\">" + nome_operador + "</span>,<br> sou representante de atendimento Copa Energia<br> e vou te ajudar a resolver sua demanda sobre: <span onclick=\"sel_tabulacao.focus()\">" + tabulacao + "</span>.<br><br>";
    }

    caso() {
        let numero_caso = txt_num_caso.value.trim();
        let texto = "";
        if (numero_caso.length > 0) {
            texto = "Gostaria de informar que recebemos a solicitação nº <span onclick=\"txt_num_caso.focus()\">" + numero_caso + "</span> e estamos nos empenhando para resolver o mais rápido possível!<br>";
        }
        return texto;
    }

    taxasMulta() {
        let texto = "";
        if (cbx_cobranca_taxas_multa.checked) {
            texto = "Há cobrança de taxas/multa: <span onclick=\"cbx_cobranca_taxas_multa.focus()\">Sim</span>;<br>";
        }
        return texto;
    }

    inadimplencia() {
        let texto = "";
        if (cbx_inadimplente.checked) {
            texto += "Inadimplente: <span onclick=\"cbx_inadimplente.focus()\">Sim</span>;<br>";
        }
        return texto;
    }

    observacoes() {
        return "<hr>Observações: a leitura do consumo de gás é realizada apenas conforme o intervalo de leitura (em dias) informado, não levando em conta qualquer janela de leitura, e também não sendo possível identificar picos de uso em dia/horário específicos.<br>" + 
        "Ps: <b>Não é recomendável o cliente fazer a leitura diária do medidor com celular, pra qualquer finalidade, por questões de segurança e para manter a integridade física do mesmo, exceto quando solicitado por um representante da Copa Energia exclusivamente para uma tratativa estritamente necessária.</b><br>";
    }

    dicas() {
        return "<hr><i>Dicas para economizar energia e colaborar para sustentabilidade</i>:<br>" + 
            "<b>Na Cozinha</b>:" + 
            "- <b>Use a panela de pressão</b>: Ela cozinha os alimentos muito mais rapidamente, o que reduz drasticamente o tempo de uso do gás;<br>" + 
            "- <b>Tampe as panelas</b>: Manter a panela tampada retém o calor e acelera o cozimento, economizando energia;<br>" + 
            "<b>Ajuste a chama</b>: Use a boca do fogão do tamanho adequado para a panela. A chama nunca deve ser maior que o fundo da panela, para evitar desperdício de calor para o ambiente;<br>" + 
            "<b>Reduza o fogo após ferver</b>: Assim que a água ou o alimento ferver, abaixe a chama para o mínimo necessário para manter a fervura. O fogo alto não acelera o processo nesse ponto;<br>" + 
            "<b>Corte os alimentos em pedaços menores</b>: Pedaços menores cozinham mais rapidamente;<br>" + 
            "<b>Aproveite o calor residual</b>: Desligue o fogo um pouco antes do alimento estar totalmente pronto. O calor já presente na panela e no alimento terminará o cozimento (isso funciona bem com massas, por exemplo);<br>" + 
            "<b>Planeje as refeições</b>: Cozinhar uma maior quantidade de comida de uma só vez ou usar o vapor de um cozimento para cozinhar outro alimento (ex: batatas e cenouras no vapor da panela de arroz) otimiza o uso do gás;<br>" + 
            "<b>Descongele alimentos</b>: Alimentos congelados levam muito mais tempo para cozinhar. Descongele-os completamente antes de levar ao fogo;<br>" + 
            "<b>Use o micro-ondas para aquecer</b>: Para pequenas porções ou líquidos, o micro-ondas é geralmente mais rápido e eficiente;<br>" + 
            "<b>No Banho e Outros Usos</b>:" + 
            "<b>Banhos mais curtos</b>: Se o seu chuveiro é a gás, reduzir o tempo debaixo da água quente diminui significativamente o consumo;<br>" + 
            "<b>Regule a temperatura</b>: Evite a temperatura máxima do aquecedor, se possível. Uma temperatura confortável, mas não excessivamente quente, economiza gás;<br>" + 
            "<b>Feche a torneira</b>: Desligue o aquecedor a gás (ou a torneira de água quente) enquanto se ensaboa ou escova os dentes;<br>" + 
            "<b>Manutenção e Segurança</b>:<br>" + 
            "<b>Mantenha o fogão limpo</b>: Bocas entupidas ou sujas resultam em uma queima ineficiente, com chamas alaranjadas. A chama ideal para o bom funcionamento e economia é a azul;<br>" + 
            "<b>Verifique vazamentos e a validade dos equipamentos</b>: Mangueiras e reguladores de gás têm data de validade (geralmente 5 anos). Verifique periodicamente se há vazamentos para garantir a segurança e evitar desperdício;";
    }

    mensagemSMS() {
        let nome_cliente = txt_nome_cliente.value.trim();

        if (nome_cliente.length == 0) {
            nome_cliente = "CLIENTE";
        } else {
            let palavras = nome_cliente.split(" ");
            nome_cliente = palavras[0];
        }

        let numero_caso = txt_num_caso.value.trim();
        if (numero_caso.length == 0) {
            numero_caso = "NUM CASO";
        }

        return "Prezado(a) <span onclick=\"txt_nome_cliente.focus()\">" + nome_cliente + "</span>,<br>\n" + 
            "A Copa Energia tem informações sobre o protocolo: <span onclick=\"txt_num_caso.focus()\">" + numero_caso + "</span>.<br>\n" + 
            "Favor verificar email/whatsapp, entrar em contato e informar o protocolo.";
    }

    trocaTitularidade() {
        let texto = "";
        if (cbx_troca_titularidade.checked) {
            texto += "Referente à sua solicitação de troca de titularidade, informamos que:<br>";
            if (cbx_falta_documento.checked) {
                let documentos_faltantes = txt_documentos_faltantes.value.trim();
                texto += "devido à falta do(s) seguinte(s) documento(s): <span onclick=\"txt_documentos_faltantes.focus()\">" + documentos_faltantes + "</span>, não foi possível prosseguir com seu atendimento, motivo pelo qual solicitamos que envie o(s) documento(s) mencionado(s), para que possamos continuar com seu pedido.<br>";
            } else {
                texto += "seu pedido foi atendido está em andamento. É necessário aguardar o prazo de até 48 horas para que o nome do novo titular da conta apareça no sitema, assim como o mesmo prazo é utilizado para receber mais informações sobre a efetivação do cadastro.<br>";
            }
        }
        return texto;
    }

    sinistro() {
        let texto = "";
        if (cbx_tem_sinistro.checked) {
            texto += "Referente à sua solicitação sobre sinistro, informamos que foi encaminhada para o nosso departamento jurídico, o qual vai continuar seu atendimento.<br>";
        }
        if (cbx_tem_vitima.checked) {
            texto += "Tem vítima: <span onclick=\"cbx_tem_vitima.focus()\">Sim</span>;<br>";
        }
        let boletim_ocorrencia = txt_numero_boletim_ocorrencia.value.trim();
        if (boletim_ocorrencia.length > 0) {
            texto += "Boletim de Ocorrência: <span onclick=\"txt_numero_boletim_ocorrencia.focus()\">" + boletim_ocorrencia + "</span>;<br>";
        }
        return texto;
    }

    riscoMorte() {
        let texto = "";
        if (cbx_risco_morte.checked) {
            texto += "Risco de morte: <span onclick=\"cbx_risco_morte.focus()\">Sim</span>;<br>";
        }
        return texto;
    }

    scriptSeguranca() {
        let texto = "";
        if (cbx_script_seguranca.checked) {
            texto += "Script de Segurança Informado: <span onclick=\"cbx_script_seguranca.focus()\">Sim</span>;<br>";
        }
        return texto;
    }

    testeFuga() {
        let texto = "";
        if (cbx_teste_fuga.checked) {
            texto += "Teste de Fuga Realizado: <span onclick=\"cbx_teste_fuga.focus()\">Sim</span>;<br>";
        }
        return texto;
    }

    despedida() {
        return "<hr>Em nome da Copa Energia agradeço o seu contato e me coloco a disposição para quaisquer dúvidas.";
    }

    medidorBloqueado() {
        let texto = "";
        if (cbx_medidor_bloqueado.checked) {
            texto += "Medidor Bloqueado: <span onclick=\"cbx_teste_fuga.focus()\">Sim</span>;<br>";
        }
        return texto;
    }

    dataDemonstrativoReclamado() {
        let data_demonstrativo_reclamado = txt_data_demonstrativo_reclamado.value.trim();
        let texto = "";
        if (data_demonstrativo_reclamado.length > 0) {
            texto += "Data do Demonstrativo Reclamado: <span onclick=\"cbx_teste_fuga.focus()\">" + data_demonstrativo_reclamado + "</span>;<br>";
        }
        return texto;
    }

    intervaloLeituraDias() {
        let intervalo_leitura_dias = txt_intervalo_leitura_dias.value.trim();
        let texto = "";
        if (intervalo_leitura_dias.length > 0) {
            texto += "Intervalo de Leitura (em dias): <span onclick=\"cbx_teste_fuga.focus()\">" + intervalo_leitura_dias + "</span>;<br>";
        }
        return texto;
    }

    mediaConsumoDiario() {
        let media_consumo_diario = txt_media_consumo_diario.value.trim();
        let texto = "";
        if (media_consumo_diario.length > 0) {
            texto += "Média de Consumo Diário (M3): <span onclick=\"cbx_teste_fuga.focus()\">" + media_consumo_diario + "</span>;<br>";
        }
        return texto;
    }

    tipoUtilizacao() {
        let texto = "";
        if (cbx_fogao.checked) {
            texto += "Utiliza Fogão a Gás: <span onclick=\"cbx_fogao.focus()\">Sim</span>;<br>";
        }
        if (cbx_chuveiro.checked) {
            texto += "Utiliza Chuveiro a Gás: <span onclick=\"cbx_chuveiro.focus()\">Sim</span>;<br>";
        }
        if (cbx_outros.checked) {
            texto += "Utiliza Outro Aparelho a Gás: <span onclick=\"cbx_outros.focus()\">Sim</span>;<br>";
            let tipo_aparelho = txt_tipo_outros.value.trim();
            if (tipo_aparelho.length > 0) {
                texto += "Tipo de Aparelho:  <span onclick=\"txt_tipo_outros.focus()\">" + tipo_aparelho + "</span>;<br>";
            }
        }
        return texto;
    }

    anoMedidor() {
        let ano_medidor = txt_ano_medidor.value.trim();
        let texto = "";
        if (ano_medidor.length > 0) {
            texto += "Ano Medidor: <span onclick=\"txt_ano_medidor.focus()\">" + ano_medidor + "</span>;<br>";
        }
        return texto;
    }

    valorDemonstrativoReclamado() {
        let valor_demonstrativo_reclamado = txt_valor_demonstrativo_reclamado.value.trim();
        let texto = "";
        if (valor_demonstrativo_reclamado.length > 0) {
            texto += "Valor Demonstrativo Reclamado: <span onclick=\"txt_valor_demonstrativo_reclamado.focus()\">" + valor_demonstrativo_reclamado + "</span>;<br>";
        }
        return texto;
    }

    condicaoLeitura() {
        let condicao_leitura = "";
        if (rdg_leitura_normal.checked) {
            condicao_leitura = "Normal";
        } else if (rdg_leitura_media.checked) {
            condicao_leitura = "Média";
        }
        return "Condição de leitura: <span onclick=\"rdg_leitura_normal.focus()\">" + condicao_leitura + "</span>;<br>";
    }

    condicaoLeituraAnterior() {
        let condicao_leitura_anterior = "";
        if (rdg_leitura_normal.checked) {
            condicao_leitura_anterior = "Normal";
        } else if (rdg_leitura_media.checked) {
            condicao_leitura_anterior = "Média";
        }
        return "Condição de Leitura Anterior: <span onclick=\"rdg_leitura_normal.focus()\">" + condicao_leitura_anterior + "</span>;<br>";
    }

    leituraAnteriorEvidencia() {
        let leitura_anterior_evidencia = txt_leitura_anterior_evidencia.value.trim();
        let texto = "";
        if (leitura_anterior_evidencia.length > 0) {
            texto += "Medição/Leitura Anterior na Evidência: <span onclick=\"txt_leitura_anterior_evidencia.focus()\">" + leitura_anterior_evidencia + "</span>;<br>";
        }
        return texto;
    }

    evidenciaLeituraDisponivel() {
        let texto = "";
        if (cbx_evidencia_leitura_disponivel.checked) {
            texto += "Evidência de Leitura Disponível: <span onclick=\"cbx_evidencia_leitura_disponivel.focus()\">Sim</span>;<br>";
            if (cbx_evidencia_leitura_correta.checked) {
                texto += "Leitura Evidência Disponível Correta: <span onclick=\"cbx_evidencia_leitura_correta.focus()\">Sim</span>;<br>";
            } else {
                texto += "Leitura Evidência Disponível Correta: <span onclick=\"cbx_evidencia_leitura_correta.focus()\">Não</span>;<br>";
            }
        }
        return texto;
    }

    leituraDemonostrativo() {
        let leitura_demonstrativo = txt_leitura_demonstrativo.value.trim();
        let texto = "";
        if (leitura_demonstrativo.length > 0) {
            texto += "Leitura no Demonstrativo: <span onclick=\"txt_leitura_demonstrativo.focus()\">" + leitura_demonstrativo + "</span>;<br>";
        }
        return texto;
    }

    leituraEvidencia() {
        let leitura_evidencia = txt_leitura_evidencia.value.trim();
        let texto = "";
        if (leitura_evidencia.length > 0) {
            texto += "Leitura na Evidencia: <span onclick=\"txt_leitura_evidencia.focus()\">" + leitura_evidencia + "</span>;<br>";
        }
        return texto;
    }

    mediaConsumoUltimosSeisMeses() {
        let media_consumo_ultimos_seis_meses = txt_media_seis_meses.value.trim();
        let texto = "";
        if (media_consumo_ultimos_seis_meses.length > 0) {
            texto += "Leitura na Evidencia: <span onclick=\"txt_media_seis_meses.focus()\">" + media_consumo_ultimos_seis_meses + "</span>;<br>";
        }
        return texto;
    }

    consumoDemonstrativoReclamado() {
        let consumo_demonstrativo_reclamado = txt_consumo_demonstrativo_reclamado.value.trim();
        let texto = "";
        if (consumo_demonstrativo_reclamado.length > 0) {
            texto += "Leitura na Evidencia: <span onclick=\"txt_consumo_demonstrativo_reclamado.focus()\">" + consumo_demonstrativo_reclamado + "</span>;<br>";
        }
        return texto;
    }

    tipoCliente() {
        return "Tipo Cliente: <span onclick=\"rdg_tipo_cliente.focus()\">" + rdg_tipo_cliente.value + "</span>;<br>";
    }

    blocoApartamento() {
        let bloco_apartamento = txt_bloco_apartamento.value.trim();
        let texto = "";
        if (bloco_apartamento.length > 0) {
            texto += "Bloco / Apartamento: <span onclick=\"txt_bloco_apartamento.focus()\">" + bloco_apartamento + "</span>;<br>";
        }
        return texto;
    }

    entradaAtendimento() {
        return "Entrada Atendimento: <span onclick=\"rdg_entrada_atendimento.focus()\">" + rdg_entrada_atendimento.value + "</span>;<br>";
    }

    leituraAlemLimite() {
        let texto = "";
        if (cbx_leitura_alem_limite.checked) {
            texto += "Leitura Além do Limite: <span onclick=\"cbx_leitura_alem_limite.focus()\">Sim</span>;<br>";
        }
        return texto;
    }

    codigoMedidor() {
        let codigo_medidor = txt_codigo_medidor.value.trim();
        let texto = "";
        if (codigo_medidor.length > 0) {
            texto += "Bloco / Apartamento: <span onclick=\"txt_codigo_medidor.focus()\">" + codigo_medidor + "</span>;<br>";
        }
        return texto;
    }

    analiseDetalhada() {
        let analise_detalhada = txt_analise_detalhada.value.trim();
        let texto = "";
        if (analise_detalhada.length > 0) {
            texto += "Análise Detalhada: <span onclick=\"txt_analise_detalhada.focus()\">" + analise_detalhada + "</span>;<br>";
        }
        return texto;
    }

    script() {
        let nome_operador = txt_nome_operador.value.trim();
        if (nome_operador.length == 0) {
            nome_operador = "PREENCHER NOME DO OPERADOR";
        }

        return "<b>SCRIPT - SAUDAÇÃO INICIAL</b><br>" + 
        "<br>" + 
        "Olá! Bem vindo(a) à Copa Energia, meu nome é <span onclick=\"txt_nome_operador.focus()\">" + nome_operador + "</span>, e irei te auxiliar hoje.<br>" + 
        "<br>" + 
        "Como posso ajudar?<br>" + 
        "<hr>" + 
        ///////////////////////////////////////////
        "<b>SCRIPT - CONTACT STUDIO</b><br>" + 
        "<br>" + 
        "Para verificar se atendemos sua região e o valor do gás, peço que me informe o seu CEP ou endereço completo, por gentileza.<br>" + 
        "Desculpe, no momento, este canal de atendimento não está disponível para pedidos na sua região.<br>" + 
        "<br>" + 
        "Se possível, peço que verifique uma revenda próxima a você em nosso site.<br>" + 
        "<br>" + 
        "🔗 https://www.copaenergia.com.br/encontre-uma-revenda<br>" + 
        "<br>" + 
        "Precisa de mais alguma informação?<br>" + 
        "<br>" + 
        "Verifiquei no sistema que há um pedido em andamento, infelizmente a revenda que estava designada para atender seu pedido não pode realiza-lo. Estamos tentando contato com outra revenda para realizar o pedido. Deseja continuar aguardando?<br>" + 
        "<br>" + 
        "Desculpa, nosso sistema só abre para entrega às 8h, peço que retorne após esse horário ou entre em contato diretamente com uma de nossas revendas.<br>" + 
        "<br>" + 
        "Seu pedido foi enviado para a revenda que atende sua região!<br>" + 
        "<br>" + 
        "Número do pedido:<br>" + 
        "<br>" + 
        "Previsão de entrega:<br>" + 
        "<hr>" + 
        ///////////////////////////////////////////
        "<b>SCRIPT - SEM INTERAÇÃO</b><br>" + 
        "<br>" + 
        "Ainda está aí? 😅<br>" + 
        "Ajudo com mais alguma informação?<br>" + 
        "Alguma dúvida sobre o site?<br>" + 
        "Precisa de mais alguma informação?<br>" + 
        "Estou à disposição para o que precisar, caso tenha alguma dúvida ou necessite de mais alguma coisa. 😊<br>" + 
        "<br>" + 
        "Podemos continuar com o atendimento?<br>" + 
        "Podemos continuar?<br>" + 
        "Deseja realizar o pedido?<br>" + 
        "Deseja continuar com o atendimento?<br>" + 
        "Gostaria de prosseguir com o atendimento?<br>" + 
        "<hr>" + 
        ///////////////////////////////////////////
        "<b>SCRIPT - FALTA DE INTERAÇÃO</b><br>" + 
        "<br>" + 
        "Por falta de interação irei encerrar o atendimento no momento, caso tenha alguma dúvida ou necessite de mais alguma coisa pode retornar o contato.<br>" + 
        "A Copa Energia agradece seu contato. Se puder, responda a pesquisa de satisfação ao final. Ela nos ajuda a entender como foi sua experiência e buscar melhorias.<br>" + 
        "Tenha um ótimo dia! 😄<br>" + 
        "Seu protocolo de atendimento é ___________<br>" + 
        "<br>" + 
        "Obrigada!<br>" + 
        "Finalizarei o atendimento neste momento, mas não hesite em nos procurar novamente quando desejar. <br>" + 
        "A Copa Energia agradece seu contato. Se puder, responda a pesquisa de satisfação ao final. Ela nos ajuda a entender como foi sua experiência e buscar melhorias.<br>" + 
        "Tenha um ótimo dia! 😄<br>" + 
        "Seu protocolo de atendimento é ___________<br>" + 
        "<br>" + 
        "Lamento, mas por falta de interação precisamos finalizar seu atendimento. A Copa Energia agradece seu contato. Se puder, responda a pesquisa de satisfação ao final. Ela nos ajuda a entender como foi sua experiência e buscar melhorias.<br>" + 
        "Tenha um ótimo dia! 😄<br>" + 
        "Seu protocolo de atendimento é ___________<br>" + 
        "<hr>" + 
        ///////////////////////////////////////////
        "<b>SCRIPT - ATENDIMENTO EM OUTRAS ÁREAS</b><br>" + 
        "<br>" + 
        "Desculpe, por aqui nosso atendimento é somente para pedidos de botijões de gás e não temos acesso a informações solicitadas. Verifiquei o CPF informado, trata-se de medição individualizada.<br>" + 
        "<br>" + 
        "Para atendimento sobre medição individual, por gentileza, entrar em contato <br>" + 
        "<br>" + 
        "WhatApp 📱 (11) 3004-3002<br>" + 
        "Ligação 📞 3004-3002<br>" + 
        "Site 🔗 https://mi.copaenergia.com.br/<br>" + 
        "<br>" + 
        "Por lá eles te auxiliarão com o que precisar. 😄<br>" + 
        "<br>" + 
        "Precisa de mais alguma informação?<br>" + 
        "<br>" + 
        "Alguma dúvida sobre os canais de atendimento?<br>" + 
        "<br>" + 
        "Ajudo com mais alguma informação?<br>" + 
        "<br>" + 
        "Para que nosso chat continue, me diga se você ainda está por aqui. Se não houver resposta em 3 minutos, a conversa será finalizada automaticamente.<br>" + 
        "<br>" + 
        "Estou aguardando a sua resposta para continuar. Para evitar que a gente tenha que começar de novo, por favor, fique online no chat para que eu consiga concluir sua solicitação. <br>" + 
        "<br>" + 
        "Obrigada.<br>" + 
        "<br>" + 
        "Pode me informar, por favor:<br>" + 
        "<br>" + 
        "Quantidade de tanque:<br>" + 
        "Porcentagens:<br>" + 
        "Data que deseja agendar o abastecimento:<br>" + 
        "<hr>" + 
        ///////////////////////////////////////////
        "<b>SCRIPT - SER UM REVENDEDOR</b> ( Caso o cliente queira trabalhar com a COPA ENERGIA para vender o seu gás ).<br>" + 
        "<br>" + 
        "Para se cadastrar como revendedor, a solicitação é feita diretamente pelo nosso site.<br>" + 
        "Segue abaixo o link para preenchimento dos seus dados. Após envio do formulário, <br>" + 
        "nossa equipe entrará em contato assim que possível.<br>" + 
        "<br>" + 
        "🔗 https://www2.liquigas.com.br/sejarevendedor<br>" + 
        "<hr>" + 
        ///////////////////////////////////////////
        "<b>SCRIPT - TRABALHE CONOSCO</b>  ( Caso o cliente queira enviar o Currículo para trabalhar com a COPA ENERGIA ).<br>" + 
        "<br>" + 
        "Para se candidatar e ficar por dentro das oportunidade disponívels, entre em nosso site<br>" + 
        "🔗 https://www.copaenergia.com.br/copaenergia/trabalhe-conosco<br>" + 
        "<hr>" + 
        ///////////////////////////////////////////
        "<b>SCRIPT - VAZAMENTO</b> ( OBS: Sempre passar esse SCRIPT se o cliente informar vazamento, independente do setor que estiver ).<br>" + 
        "<br>" + 
        "Tenho algumas orientações importantes.<br>" + 
        "⚠️ Em caso de vazamento de gás, a segurança é primordial.<br>" + 
        "<br>" + 
        "- Feche o registro do gás;<br>" + 
        "- Não acione interruptores nem utilize aparelhos elétricos, como telefones celulares ou lâmpadas; <br>" + 
        "- Não acenda fósforos ou isqueiros; <br>" + 
        "- Ventile o ambiente abrindo portas e janelas, e saia do local imediatamente;<br>" + 
        "- Coloque o botijão num local arejado;<br>" + 
        "- Em casos mais graves, ligue para os serviços de emergência, como o Corpo de Bombeiros (193).<br>" + 
        "<hr>" + 
        "Atendimento Empresarial | B2B 0800 729 7777<br>" + 
        "<hr>" + 
        "<a href=\"https://360.articulate.com/review/content/5ba9769b-2768-4776-b7c1-15174d8c1a41/review\" target=\"_blank\">Bases de conhecimento Copa Energia</a>" + 
        "<hr>" + 
        ///////////////////////////////////////////
        "<b>SCRIPT - MI CHAT/WHATSAPP</b><br>" + 
        "<br>" + 
        "Confirme por gentileza as informações abaixo (?):<br>" + 
        "- Nome completo e código do titular da conta;<br>" + 
        "<br>" + 
        "- Nome do condomínio (e código, se tiver);<br>" + 
        "<br>" + 
        "- Bloco e partamento;<br>" + 
        "<br>" + 
        "Fim";
    }

    analiseConsumo() {
        let texto = "";
        let m3 = txt_m3.value.trim();
        if (m3.length > 0) {
            texto += "Consumo em m3: " + m3 + ";<br>";
        }
        let consumo = txt_consumo.value.trim();
        if (consumo.length > 0) {
            texto += "Consumo em m3 x Fator (" + txt_fator.value.trim() + "): " + consumo + ";<br>";
        }
        let valor_devido = txt_valor_devido.value.trim();
        if (valor_devido.length > 0) {
            texto += "Valor Devido: R$" + valor_devido.replace(".",",") + ";<br>";
        }
    }
}

$(document).ready(function() {
    $('#txt_cod_sap_cliente').mask('0000000000');
    $('#txt_num_caso').mask('0000000000');
    $('#txt_ano_medidor').mask('0000');
});

// alert("ok");

var txt_media_copiado_seis_linhas = "" + 
"11 - 2025	2,210	26,69	32	Não\n" + 
"10 - 2025	2,585	30,49	30	Não\n" +
"09 - 2025	3,100	35,71	28	Não\n" +
"08 - 2025	3,850	41,90	33	Não\n" +
"07 - 2025	2,950	33,11	17	Não\n" +
"06 - 2025	3,183	35,39	45  ";

notificarOk("<pre>" + txt_media_copiado_seis_linhas + "</pre>");

var txt_media_copiado_cinco_linhas = "" + 
"11 - 2025	2,210	26,69	32	Não\n" + 
"10 - 2025	2,585	30,49	30	Não\n" +
"09 - 2025	3,100	35,71	28	Não\n" +
"08 - 2025	3,850	41,90	33	Não\n" +
"07 - 2025	2,950	33,11	17";

var txt_media_copiado_quatro_linhas = "" + 
"11 - 2025	2,210	26,69	32	Não\n" + 
"10 - 2025	2,585	30,49	30	Não\n" +
"09 - 2025	3,100	35,71	28	Não\n" +
"08 - 2025	3,850	41,90	33	";

var txt_media_copiado_tres_linhas = "" + 
"11 - 2025	2,210	26,69	32	Não\n" + 
"10 - 2025	2,585	30,49	30	Não\n" +
"09 - 2025	3,100	35,71	28";

var txt_media_copiado_duas_linhas = "" + 
"11 - 2025	2,210	26,69	32	Não\n" + 
"10 - 2025	2,585	30,49	30  ";

var txt_media_copiado_uma_linha = "" + 
"11 - 2025	2,210	26,69	32";

var tab = "	"; // unidade de tabulação

async function colarMediaCompleta() {
    try {
        const clipText = await navigator.clipboard.readText();
        // This code block will execute after the clipboard text has been read
        // notificarOk("Clipboard content: " +  clipText);
        preencherMediaCompleta(clipText);
        // You can now use 'clipText' in further operations
        // document.getElementById("output").innerText = clipText;
    } catch (err) {
        notificarNok("Failed to read clipboard contents:", err);
        // Handle potential errors, such as permission denial
    }

    // var text = await navigator.clipboard.readText()
    // .then(() => {
    //     preencherMediaCompleta(text);
    //     notificarOk(text);
    // });
}

function preencherMediaCompleta(txt_media_copiado) {
    limparMediaCompleta();
    let matriz_linhas_copiadas = txt_media_copiado.split("\n");

    let matriz_colunas = [];

    let media_mes_ref = [];
    let media_fator = [];
    let media_consumo_m3 = [];
    let media_consumo_kg = [];
    let media_custo = [];
    let media_intervalo = [];
    let media_valor = [];

    // notificarOk(txt_media_copiado.split("\n"));
    // notificarOk(txt_media_copiado.split("\n").length);

    for (i = 0; i < matriz_linhas_copiadas.length; i++) {
        matriz_colunas[i] = matriz_linhas_copiadas[i].split(tab);
        if (matriz_colunas[i].length >= 4 && matriz_colunas[i].length <= 5) {
            media_mes_ref[i] = matriz_colunas[i][0];
            media_fator[i] = parseFloat(txt_fator.value.trim());
            media_consumo_m3[i] = parseFloat(matriz_colunas[i][1]) / parseFloat(txt_fator.value.trim());
            media_consumo_kg[i] = matriz_colunas[i][1];
            media_custo[i] = matriz_colunas[i][2];
            media_intervalo[i] = matriz_colunas[i][3];
            media_valor[i] = matriz_colunas[i][4];

            document.getElementById("txt_mes_ref" + (i + 1)).value = media_mes_ref[i];
            document.getElementById("txt_fator" + (i + 1)).value = media_fator[i];
            document.getElementById("txt_m3" + (i + 1)).value = media_consumo_m3[i];
            document.getElementById("txt_consumo" + (i + 1)).value = media_consumo_kg[i];
            document.getElementById("txt_custo" + (i + 1)).value = media_custo[i];
            document.getElementById("txt_intervalo" + (i + 1)).value = media_intervalo[i];
            document.getElementById("txt_valor" + (i + 1)).value = txt_preco_unitario.value.trim();
        }
    }
    // notificarOk(matriz_colunas[0]);
    calcularMediaCompleta();
}

function calcularMediaCompleta() {
    let fator_tmp = 0;
    let m3_tmp = 0;
    let kg_tmp = 0;
    let custo_tmp = 0;
    let intervalo_tmp = 0;
    let valor_tmp = 0;
    let qtd_linhas_preenchidas = 0;
    for (i = 1; i <= 6; i++) {
        let txt_mes_ano_tmp = document.getElementById("txt_mes_ref" + i);
        let txt_fator_tmp = document.getElementById("txt_fator" + i);
        let txt_m3_tmp = document.getElementById("txt_m3" + i);
        let txt_consumo_tmp = document.getElementById("txt_consumo" + i);
        let txt_custo_tmp = document.getElementById("txt_custo" + i);
        let txt_intervalo_tmp = document.getElementById("txt_intervalo" + i);
        let txt_valor_tmp = document.getElementById("txt_valor" + i);
        if (txt_mes_ano_tmp.value.trim().length > 0) {
            fator_tmp += parseFloat(txt_fator_tmp.value.trim().replace(",","."));
            m3_tmp += parseFloat(txt_m3_tmp.value.trim().replace(",","."));
            kg_tmp += parseFloat(txt_consumo_tmp.value.trim());
            custo_tmp += parseFloat(txt_custo_tmp.value.trim().replace(",","."));
            intervalo_tmp += parseInt(txt_intervalo_tmp.value.trim());
            valor_tmp += parseFloat(txt_valor_tmp.value.trim().replace(",","."));
            qtd_linhas_preenchidas++;
        }
    }

    if (qtd_linhas_preenchidas > 0) {
        document.getElementById("txt_mes_ref_media").value = qtd_linhas_preenchidas;
        document.getElementById("txt_fator_media").value = fator_tmp / qtd_linhas_preenchidas;
        document.getElementById("txt_m3_media").value = m3_tmp / qtd_linhas_preenchidas;
        document.getElementById("txt_consumo_media").value = kg_tmp / qtd_linhas_preenchidas;
        document.getElementById("txt_custo_media").value = custo_tmp / qtd_linhas_preenchidas;
        document.getElementById("txt_intervalo_media").value = intervalo_tmp / qtd_linhas_preenchidas;
        document.getElementById("txt_valor_media").value = valor_tmp / qtd_linhas_preenchidas;
    }
    // notificarOk(qtd_linhas_preenchidas);
}

function limparMediaCompleta() {
    for (i = 1; i <= 6; i++) {
        document.getElementById("txt_mes_ref" + i).value = "";
        document.getElementById("txt_fator" + i).value = "";
        document.getElementById("txt_m3" + i).value = "";
        document.getElementById("txt_consumo" + i).value = "";
        document.getElementById("txt_custo" + i).value = "";
        document.getElementById("txt_intervalo" + i).value = "";
        document.getElementById("txt_valor" + i).value = "";
    }
}

btn_colar_media_completa.addEventListener('click', function () {
    colarMediaCompleta();
});

btn_calcular_media_completa.addEventListener('click', function () {
    calcularMediaCompleta();
});

window.addEventListener('paste', function() {
    colarMediaCompleta();
});

function copiparMediaCompleta() {
    let texto = "";
    for (i = 1; i <= 6; i++) {
        let txt_mes_ano_tmp = document.getElementById("txt_mes_ref" + i);
        let txt_fator_tmp = document.getElementById("txt_fator" + i);
        let txt_m3_tmp = document.getElementById("txt_m3" + i);
        let txt_consumo_tmp = document.getElementById("txt_consumo" + i);
        let txt_custo_tmp = document.getElementById("txt_custo" + i);
        let txt_intervalo_tmp = document.getElementById("txt_intervalo" + i);
        let txt_valor_tmp = document.getElementById("txt_valor" + i);
        if (txt_mes_ano_tmp.value.trim().length > 0) {
            texto += txt_mes_ano_tmp.value.trim() + tab + 
                txt_fator_tmp.value.trim() + tab + 
                txt_m3_tmp.value.trim() + tab + 
                txt_consumo_tmp.value.trim() + tab + 
                txt_custo_tmp.value.trim() + tab + 
                txt_intervalo_tmp.value.trim() + tab + 
                txt_valor_tmp.value.trim().replace(",",".") + "\n";
        }
    }

    if (texto.length > 0) {
        texto += txt_mes_ref_media.value.trim() + tab + tab;
        texto += parseFloat(txt_fator_media.value.trim()) + tab;
        texto += parseFloat(txt_m3_media.value.trim()) + tab;
        texto += parseFloat(txt_consumo_media.value.trim().replace(",",".")) + tab;
        texto += parseFloat(txt_custo_media.value.trim().replace(",",".")) + tab;
        texto += parseInt(txt_intervalo_media.value.trim()) + tab;
        texto += parseFloat(txt_valor_media.value.trim());
    }

    navigator.clipboard.writeText(texto).then(function() {
        notificarOk('Texto copiado com sucesso!');
    }, function(err) {
        notificarOk('Não foi possível copiar o texto!');
    });
}

btn_copiar_media_completa.addEventListener('click', function () {
    copiparMediaCompleta();
});
// colarMediaCompleta();
// preencherMediaCompleta(txt_media_copiado_quatro_linhas);