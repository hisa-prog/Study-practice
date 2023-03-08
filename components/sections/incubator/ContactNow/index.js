import React from 'react'


export const ContactNow = ({ title, data, color = 'blue', subtitle }) => {
	return (
		<div className={`contact-now contact-now--${color}`}>
			<h4 className='contact-now__title'>{title}</h4>
			<p className='contact-now__subtitle'>{subtitle}</p>
			<div className='contact-now__grid'>
				{data.map((item, i) => (
					<div className='contact-now__grid-row' key={i}>
						<div className='contact-now__col'>
							<div className='contact-now__avatar'>
								<img loading='lazy' src={item.avatar} alt={item.name} />
							</div>
							<div className='contact-now__profile'>
								<p className='contact-now__profile-name'>{item.name}</p>
								<div className='contact-now__profile-email'>
									<a href={`mailto:${item.email}`}>{item.email}</a>
								</div>
							</div>
						</div>
						<div className='contact-now__col'>
							<div className='contact-now__messengers'>
								{item.telegram && (
									<div className='contact-now__messenger'>
										<a href={item.telegram.link} target='_blank'>
											<div className='contact-now__messenger-icon'>
												<img loading='lazy' src='/images/contactNow/icon-telegram.webp' />
											</div>
										</a>
										<p className='contact-now__messenger-label'>Telegram</p>
									</div>
								)}
								{item.whatsApp && (
									<div className='contact-now__messenger'>
										<a href={item.whatsApp.link} target='_blank'>
											<div className='contact-now__messenger-icon'>
												<img loading='lazy' src='/images/contactNow/icon-whatsapp.webp' />
											</div>
										</a>
										<p className='contact-now__messenger-label'>WhatsApp</p>
									</div>
								)}
								{item.wechat && (
									<div className='contact-now__messenger'>
										<a href={item.wechat.link} target='_blank'>
											<div className='contact-now__messenger-icon contact-now__messenger-icon--qrcode'>
												<img loading='lazy' src='/images/contactNow/qr-wechat-dan.webp' />
											</div>
											<div className='contact-now__messenger-icon contact-now__messenger-icon--wechat'>
												<img loading='lazy' src='/images/contactNow/icon-wechat.webp' />
											</div>
										</a>
										<p className='contact-now__messenger-label'>WeChat</p>
									</div>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
