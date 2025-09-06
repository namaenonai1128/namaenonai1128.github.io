  document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有对比组件
    const pancreasSlider = new juxtapose.JXSlider('#pancreas-compare', [
      { src: './img2/pancreas/a.png', label: 'raw', credit: '' },
      { src: './img2/pancreas/b.png', label: 'seg', credit: '' }
    ], { animate: true, showLabels: true, startingPosition: '50%' });

    const liverSlider = new juxtapose.JXSlider('#liver-compare', [
      { src: './img2/pancreas/a.png', label: 'raw', credit: '' },
      { src: './img2/pancreas/b.png', label: 'seg', credit: '' }
    ], { animate: true, showLabels: true, startingPosition: '50%' });

    const colonSlider = new juxtapose.JXSlider('#colon-compare', [
      { src: './img2/pancreas/a.png', label: 'raw', credit: '' },
      { src: './img2/pancreas/b.png', label: 'seg', credit: '' }
    ], { animate: true, showLabels: true, startingPosition: '50%' });

    const lungSlider = new juxtapose.JXSlider('#lung-compare', [
      { src: './img2/pancreas/a.png', label: 'raw', credit: '' },
      { src: './img2/pancreas/b.png', label: 'seg', credit: '' }
    ], { animate: true, showLabels: true, startingPosition: '50%' });

    const ASlider = new juxtapose.JXSlider('#A-compare', [
      { src: './img2/pancreas/a.png', label: 'raw', credit: '' },
      { src: './img2/pancreas/b.png', label: 'seg', credit: '' }
    ], { animate: true, showLabels: true, startingPosition: '50%' });

    const BSlider = new juxtapose.JXSlider('#B-compare', [
      { src: './img2/pancreas/a.png', label: 'raw', credit: '' },
      { src: './img2/pancreas/b.png', label: 'seg', credit: '' }
    ], { animate: true, showLabels: true, startingPosition: '50%' });

    const CSlider = new juxtapose.JXSlider('#C-compare', [
      { src: './img2/pancreas/a.png', label: 'raw', credit: '' },
      { src: './img2/pancreas/b.png', label: 'seg', credit: '' }
    ], { animate: true, showLabels: true, startingPosition: '50%' });

    const DSlider = new juxtapose.JXSlider('#D-compare', [
      { src: './img2/pancreas/a.png', label: 'raw', credit: '' },
      { src: './img2/pancreas/b.png', label: 'seg', credit: '' }
    ], { animate: true, showLabels: true, startingPosition: '50%' });

    console.log('所有对比组件初始化完成');
  });
