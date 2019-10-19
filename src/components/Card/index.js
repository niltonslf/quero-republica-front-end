import React from 'react'
import './styles.css'

export default function Card() {
  return (
    <article className="card">
      <img
        src="https://lh3.googleusercontent.com/KclFqmQlEFV7t4YKX2HRXLP9o_79V6cDvacp-h64sD0uKk82GqbD0htInrYpE25EbKyI524-kfmscsy3mu5bPVwyh5Qbl1DJdeG6C28b2K9cZ3gcg_fXKrUxWJmr3m7ivVqLEbSGxEGkXSSK1_-Cza6IIZ1UMXb8lWcFhGvUDsfZhHp4wwfBkaV5R8_pGeIHhPmACgZg2wQcCqLnZcsRjEmZ65IO2RoePlfovEYofAy6CjVWtKFxlZYYzU2Dounx927zXXeomsM6Ltuxg25YMViYdknuj5CH677ieYQRXpLSB31YBxkhswLXKa_4j_OcuogeSZhOVbI7jz03mFbC1MFovipwDZmNNjvy7cDGb9-NPrs06QUFV-GKxmF6BZLyoxErAkE3wsc_wC9OlStTdo4wsmbofxv2gACy19oxjpneePJ6IgDZHFaxehsCzDj2PrU7bPSMw0GkoKDwXdLWQ8opm6N6cdk8ls_d0FHZNSX2YlaE5nxyCRBxmrsa85dCz-CJkyEy617YUAMwxT5A2SdkoOJZEHdk0lKZpF-_6I6Mg10JiRdx5hEiEl4shfxm-127lEtyE1gXFU5enNjDRpzAwbDsTu-8YduSHPcUUI_q1kYY1-cmjWHIhoCEI9x_6STkFTY2yL_0hwbHFvcHdJMfvMgMCkZ-sxM-rAoTdK7kbLwH-T59wwQ=w1199-h675-no"
        alt="Imagem de exemplo"
      />
      <div className="card__body">
        <h2>República Aleluia</h2>
        <p>700R$</p>
        <p>Santa Helena - PR</p>
      </div>
    </article>
  )
}
