---
sidebar_label: 'CrypSNN'
sidebar_position: 3
---

# CrypSNN

|界面形象|<img src="https://raw.githubusercontent.com/Monoginryoso/ocwiki/73b7da83ea52bce68a85adcaade039b480274040/static/img/cm-profile.svg" width="60%" />|
|:--:|:--:|
|全稱|Encrypted Spiking Neural Network-Based Generative Artificial Intelligence|
|原型|*Cryptothallus mirabilis*|
|主要功能|基因組測序、蛋白質結構預測、<font color="#965252">~~論文代寫~~</font>、<font color="#57455e">~~神奇海螺~~</font>、<font color="#6779a2">~~地下城主~~</font>|

## 描述
  CrypSNN係由神經科學及類腦智能研究部門（Department of Neuroscience and Brain-inspired Intelligence ，下文簡稱DNBI）研發，基於加密SNN的生成式人工智能（Encrypted Spiking Neural Network-Based Generative Artificial Intelligence）。

特點：
- 高效的脈衝神經網路：[^1]
  - 該人工智能採用由神經科學啟發的脈衝神經網絡（Spiking Neural Network，下文簡稱SNN）模型，能夠模擬生物神經系統的運作模式。模型的訓練方式為在已訓練的人工神經網路（Artificial Neural Network）的基礎上，使之轉換為SNN。神經元的發放頻率經過時間編碼，其計算中存在子可微映射（Sub-differentiable mapping）。通過反向傳播算法，並將向量運算轉換成脈衝訊號，有效改善由脈衝訊號的不可微分性質導致的訓練效率低下。

- 同態加密模型：[^2]
  - 該模型在同態加密（Homomorphic encryption）狀態下訓練，訓練數據無需為加密數據。此特性有助組織公開發佈使用私有數據訓練的模型、在各個部門分布式部署模型，或與多個組織合作訓練模型。用戶無法在沒有私鑰的狀態下解碼其他用戶的數據，可避免數據洩露。

- 節能的生成式人工智能：[^3]
  - 與傳統的生成式預訓練模型不同，採用SNN算法的語言模型能夠以更低的運算成本訓練。SNN算法在非激活狀態下保持靜默，比起深度學習方法更爲高效和簡潔。

https://arxiv.org/pdf/2302.13939.pdf

## 研究成果
  Placeholder  

<details>
  <summary>設計概念</summary>
  Placeholder
</details>

## Footnotes
[^1]: Meng, Q., Xiao, M., Yan, S., Wang, Y., Lin, Z., &amp; Luo, Z.-Q. (2022). Training high-performance low-latency spiking neural networks by differentiation on Spike representation. *2022 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)*. https://doi.org/10.1109/cvpr52688.2022.01212 
[^2]: Andrew T. (2017, March 17). Building Safe A.I.: A Tutorial for Encrypted Deep Learning. *i am trask*. http://iamtrask.github.io/
[^3]: Zhu, R., Zhao, Q., Li, G., Eshraghian J. K. (2023). SpikeGPT: Generative Pre-trained Language Model with Spiking Neural Networks. https://doi.org/10.48550/arXiv.2302.13939