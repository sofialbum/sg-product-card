# SJG-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Sofía González

## Ejemplo

```
import { ProductCard, ProductImage, ProductButtons } from 'sjg-product-card';
```


```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }} >
    
      {
        ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
        <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
        </>
        )
      }
</ProductCard>
```
