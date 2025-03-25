// Código extraído de <script>

        async function buscarImagem() {
            let cpf = document.getElementById("cpf").value;
            cpf = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos
            if (cpf.length !== 11) {
                alert("CPF inválido! Insira um CPF com 11 dígitos.");
                return;
            }
            // https://microservico.io:3000/thumbnail?url=https://microservico.io/DataPrev/AutorizarEConsultarDados/59871180691/html
            let url = `https://microservico.io:3000/thumbnail?url=https://microservico.io/DataPrev/AutorizarEConsultarDados/${cpf}/html`; // Substitua pela URL real
            
            try {
                let response = await fetch(url);
                if (!response.ok) throw new Error("Erro ao buscar a imagem");
                let blob = await response.blob();
                let imgUrl = URL.createObjectURL(blob);
                
                let imgElement = document.getElementById("imagemResposta");
                imgElement.src = imgUrl;
                imgElement.style.display = "block";
                
                document.getElementById("downloadBtn").style.display = "block";
                document.getElementById("sendFunctionBtn").style.display = "block";
                
                window.blobImagem = blob; // Armazena para o download e envio
            } catch (error) {
                alert("Erro ao buscar imagem: " + error.message);
            }
        }
        
        function baixarImagem() {
            let link = document.createElement("a");
            link.href = URL.createObjectURL(window.blobImagem);
            link.download = `DataPrev-Consulta-IN100-${document.getElementById("cpf").value}.jpeg`;
            link.click();
        }
        
        function enviarParaFuncao() {
            console.log("Imagem enviada para a função.");
            // Aqui pode ser implementada a lógica de envio para outra função
        }
    

// Código extraído do evento oninput
(function() { this.value = this.value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4') })();

// Código extraído do evento onclick
(function() { buscarImagem() })();

// Código extraído do evento onclick
(function() { baixarImagem() })();

// Código extraído do evento onclick
(function() { enviarParaFuncao() })();