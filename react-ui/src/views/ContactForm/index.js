<Form id="contact-entry" className="form-control">
			    <Form.Field>
			      <input className="form-control" placeholder='Your Name'/>
			    </Form.Field>
			    <Form.Field>
			      <input className="form-control" placeholder='Your Email Address' />
			    </Form.Field>
			    <Form.Field>
			      <Form.TextArea  style={EmailText} placeholder="Hey, let's chat!" />
			    </Form.Field>
			    <Grid column='centered'>
			    	<Grid.Row>
			    		<Grid.Column width='centered six'>
			    			<Button style={ContactButton} type='submit' size='medium' content='SEND'></Button>
			    		</Grid.Column>
			    	</Grid.Row>
			    </Grid>
			    <Message
			      success
			      header='Form Completed'
			      content="Talk to you soon!"
			    />
	  		</Form>