---
# layout: post
title:  "NeurIPS 2024 Edge-Device LLM Competition Team NICS-EffAlg Solutions (2nd Place)"
date:   2024-12-18
permalink: /NeurIPS2024_EdgeLLM_Competition
---

<!-- <span>
    <a class="custom_buttom" href="../assets/ppt/2024-10-18-GMCA.pdf">
    Slides
    </a>
</span> -->

## Introduction

In this blog post, we introduce the solutions presented by Team NICS-EffAlg, which participated in the Edge-LLM Competition. Composed of members from Tsinghua University and Infinigence AI.The team showcased their innovative approach to compressing the Llama-3.1-8b, QWen2-7b, and Phi-2 models. Additionally, they developed a new LLM model, C4NGPT-0.8b, specifically for Track 2 of the competition.

The team won the 2nd place in both the Model Compression Track and the Training From Scratch Track at the NeurIPS 2024 Edge-Device LLM Competition.

<div style="display: flex; justify-content: space-between; width: 100%;">
    <figure style="width: 33%; height: auto;">
        <img src="../assets/posts_images/neurips2024_edgellm_competition/edgellm_competition_award1.jpg" alt="pixart1k_result">
    </figure>

    <figure style="width: 33%; height: auto;">
        <img src="../assets/posts_images/neurips2024_edgellm_competition/edgellm_competition_award2.jpg" alt="DiTFastAttn_overview">
    </figure>

    <figure style="width: 30%; height: auto;">
        <img src="../assets/posts_images/neurips2024_edgellm_competition/edgellm_competition_talk.jpg" alt="DiTFastAttn_overview">
    </figure>
</div>

Team Members: Zhihang Yuan, Hanling Zhang, Shiyao Li, Xuefei Ning, and Yu Wang.


## Track 1: Model Compression
### Motivation
The primary goal of Track 1 was to compress the Llama 3.1 8B model by 50%. The team recognized that one-shot pruning was not feasible and opted for an iterative approach. They explored various pruning techniques, including vocabulary pruning, width pruning, and decomposition, to achieve the desired compression ratio.

### Pipeline and Techniques
#### Vocabulary Pruning:

The team removed 40% of the least frequent vocabulary tokens.
Fine-tuning was performed post-pruning to recover performance.

#### Width Pruning:

Utilized LLM-Pruner for width pruning.
Reduced the number of heads from 32 to 28 (12.5% reduction) and decreased the intermediate size by 15%.

#### Decomposition:

Introduced DecompLLM, built upon ASVD and SVD-LLM with three key improvements.
Employed iterative top-K compression, where layers that minimally increased perplexity were pruned and frozen during fine-tuning.

#### Fine-tuning Configuration
#### Recovery Fine-tuning:

Used LoRA with parameters: r=8, alpha=16, dropout=0.1.
Dataset: Alpaca (English and Chinese) processed into chat format.
Learning rate: 2e-5, batch size: 4, iterations: 3000.

#### DecompLLM Fine-tuning:

Partially trained with a small fraction of the data (10%).
Fine-tuned with the same dataset and configuration as above.

#### Empirical Findings

Calibration Dataset Importance:
The team found that the length and diversity of the calibration dataset significantly impacted performance.
Results showed that longer sequences (e.g., 256 tokens) generally performed better.

Pruning Ratio Impact:
Different pruning ratios and datasets were tested, with the best results achieved using a pruning ratio of 0.2 on the alpaca bilingual chat dataset.

## Track 2: C4NGPT-0.8b Model
### Model Architecture
nGPT Architecture:
Designed a model with 0.8B parameters, based on the normalized Transformer architecture.
Key features: Faster convergence and improved performance on downstream tasks due to representation learning on a hypersphere.

### Pretraining Phase
#### Data Processing:

C4 data was filtered to remove sensitive content, URLs, and repeats.
Included 15% Chinese corpus and 85% English corpus, with a sequence length of 1024.

### Pretraining:
Trained for 2000 GPU hours (32x A100 40G, 3 days).
Batch size: 512, Adam optimizer.

### SFT (Supervised Fine-Tuning)
#### Data Processing:

Alpaca data was transformed into a Llama3-like prompt format, including both English and Chinese data.

#### Training:

Batch size: 128, Adam optimizer.
Trained for 1 epoch with 1 GPU hour.

## Conclusion
Team NICS-EffAlg's approach to model compression and their introduction of the C4NGPT model showcase innovative techniques in reducing model size while maintaining performance. Their iterative pruning strategy and the nGPT architecture demonstrate promising directions for efficient LLM deployment on edge devices.

## Acknowledgments
Special thanks to the NICS-efc Lab and Infinigence AI for their contributions to this research.